import json
import os
import re
from pathlib import Path

import requests

BOX_API = "https://api.box.com/2.0"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = Path(
    os.getenv("COURSE_NOTES_OUTPUT", str(PROJECT_ROOT / "public" / "course-notes.json"))
)


def load_local_env() -> None:
    env_file = PROJECT_ROOT / ".env"
    if not env_file.exists():
        return

    for line in env_file.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or "=" not in stripped:
            continue
        key, value = stripped.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def get_box_token() -> str:
    load_local_env()
    token = os.getenv("BOX_TOKEN") or os.getenv("BOX_ACCESS_TOKEN")
    if not token:
        raise RuntimeError(
            "Missing Box token. Set BOX_TOKEN in your environment or create a local .env file."
        )
    return token


TOKEN = get_box_token()

FOLDER_GROUPS = [
    {
        "label": "Sophomore · 1st Sem",
        "courses": [
            {"name": "CS 173", "folder_id": "411189599836"},
            {"name": "ECE 220", "folder_id": "397378237435"},
            {"name": "ECE 310", "folder_id": "411192616651"},
        ],
    },
    {
        "label": "Freshman · 1st Sem",
        "courses": [
            {"name": "CLCV 224", "folder_id": "389436165383"},
            {"name": "ECE 110", "folder_id": "389434919910"},
            {"name": "MATH 241", "folder_id": "389435965537"},
            {"name": "PHYS 213", "folder_id": "389436139012"},
            {"name": "PHYS 214", "folder_id": "389435445136"},
        ],
    },
    {
        "label": "Freshman · 2nd Sem",
        "courses": [
            {"name": "ECE 120", "folder_id": "389436604695"},
            {"name": "ECE 210", "folder_id": "389434612277"},
            {"name": "MATH 257", "folder_id": "389436318054"},
            {"name": "MATH 285", "folder_id": "389437021250"},
        ],
    },
]

INCLUDE_PATTERN = re.compile(
    r"(summary|equation|formula|review|lecture|template|hw|homework|worksheet|prelecture|slides|notes)",
    re.IGNORECASE,
)


def get_shared_link(file_id: str) -> str:
    response = requests.put(
        f"{BOX_API}/files/{file_id}",
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        },
        json={"shared_link": {"access": "open"}},
        timeout=30,
    )
    response.raise_for_status()
    data = response.json()
    shared_link = data.get("shared_link")
    if not shared_link or not shared_link.get("url"):
        raise ValueError(f"No shared link generated for file {file_id}")
    return shared_link["url"]


def should_include(name: str) -> bool:
    return bool(INCLUDE_PATTERN.search(name)) and name.lower().endswith(
        (".pdf", ".doc", ".docx", ".ppt", ".pptx")
    )


def canonical_note_name(name: str) -> str:
    cleaned = name.rsplit(".", 1)[0]
    return cleaned.strip()


def fetch_folder_files(folder_id: str):
    response = requests.get(
        f"{BOX_API}/folders/{folder_id}/items",
        headers={"Authorization": f"Bearer {TOKEN}"},
        params={"limit": 1000},
        timeout=30,
    )
    response.raise_for_status()
    entries = response.json().get("entries", [])
    files = []

    for item in entries:
        if item.get("type") != "file":
            continue
        filename = item.get("name", "")
        if not should_include(filename):
            continue

        files.append(
            {
                "name": canonical_note_name(filename),
                "href": get_shared_link(str(item["id"])),
            }
        )

    return files


def generate_course_notes():
    groups = []
    for group in FOLDER_GROUPS:
        courses = []
        for course in group["courses"]:
            notes = fetch_folder_files(course["folder_id"])
            if not notes:
                continue
            courses.append({"name": course["name"], "notes": notes})

        if courses:
            groups.append({"label": group["label"], "courses": courses})

    return {
        "generatedAt": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        "groups": groups,
    }


if __name__ == "__main__":
    try:
        TOKEN = get_box_token()
    except RuntimeError as exc:
        raise SystemExit(str(exc)) from exc

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = generate_course_notes()
    with OUTPUT_PATH.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=2)
        handle.write("\n")

    print(f"Saved notes JSON to {OUTPUT_PATH}")
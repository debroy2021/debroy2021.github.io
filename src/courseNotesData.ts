export type CourseNote = {
  name: string;
  href: string;
};

export type CourseNoteGroup = {
  label: string;
  courses: Array<{
    name: string;
    notes: CourseNote[];
  }>;
};

export const fallbackCourseNoteGroups: CourseNoteGroup[] = [
  {
    label: "Sophomore · 1st Sem",
    courses: [
      {
        name: "CS 173",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/1mkil3pekuuacbhc036oes0b7d1ool1i",
          },
        ],
      },
      {
        name: "ECE 220",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/bem644ud9s733ylgzztqck26jzezzchl",
          },
        ],
      },
      {
        name: "ECE 310",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/13684xo98x8rqko3toftva0zpy0d51q8",
          },
          {
            name: "Review",
            href: "https://uofi.box.com/s/0bzjl1z03nj0vqwqcopl3u2cf1p5b3oq",
          },
        ],
      },
    ],
  },
  {
    label: "Freshman · 2nd Sem",
    courses: [
      {
        name: "ECE 120",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/qr3eur01tnm4jhkstk4ncwix1vg6onme",
          },
        ],
      },
      {
        name: "ECE 210",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/0gb5q7a6ezqpkmmbsc3ibhpsz1mupnhf",
          },
          {
            name: "Final TA Review",
            href: "https://uofi.box.com/s/qo9xqii1f706dg9hz57ggo6jmbxpw61q",
          },
        ],
      },
      {
        name: "MATH 257",
        notes: [
          {
            name: "Complete Lecture Notes (Filled)",
            href: "https://uofi.box.com/s/6ncvd5iuy9m52oz4qiy4iv84cafzl37a",
          },
          {
            name: "Linear Algebra Summary Sheets",
            href: "https://uofi.box.com/s/n6rux41v9ldgkss1x36b0u98017oqvtc",
          },
        ],
      },
      {
        name: "MATH 285",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/ask3tfxsr9mul15kfjbszikyylzjsw9e",
          },
          {
            name: "Lecture Notes",
            href: "https://uofi.box.com/s/jovbsr9xfiha8kqsvnjhmgofugi449pe",
          },
        ],
      },
    ],
  },
  {
    label: "Freshman · 1st Sem",
    courses: [
      {
        name: "ECE 110",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/ary9xn1ps29jpjzm891w9lr0wdbfi843",
          },
          {
            name: "Quiz Formula Sheet",
            href: "https://uofi.box.com/s/syl1h8bu4dae6ootuvisby34gpmfiv8d",
          },
        ],
      },
      {
        name: "MATH 241",
        notes: [
          {
            name: "Review and Applications Notes",
            href: "https://uofi.box.com/s/k1laa2in33s2g2vhkz1azc38ay2jturr",
          },
        ],
      },
      {
        name: "PHYS 213",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/qcu304exh66b3tyo9jkwk9dlg82tar1s",
          },
          {
            name: "Equation Sheet",
            href: "https://uofi.box.com/s/2mot1eqpikfrm56lsxwxjup4i1qvam0f",
          },
          {
            name: "HW Template",
            href: "https://uofi.box.com/s/2p54dofcewd4im4lvba8cxb7denix6jz",
          },
          {
            name: "Prelecture Notes",
            href: "https://uofi.box.com/s/w4db7q46pf4dr9x94oromqveo85kxuwd",
          },
          {
            name: "Lecture Notes",
            href: "https://uofi.box.com/s/y8enwsnc9i5opibiio1ojkclk3h9lzek",
          },
        ],
      },
      {
        name: "PHYS 214",
        notes: [
          {
            name: "Summary Sheet",
            href: "https://uofi.box.com/s/9glw70bcl9c5f6jkeq1xizp55uam4546",
          },
          {
            name: "Equation Sheet",
            href: "https://uofi.box.com/s/synuwsuazyw0u2s987s34kebkgjcubof",
          },
          {
            name: "Quantum Lectures",
            href: "https://uofi.box.com/s/3cp771pj0wnur0l3vg3a36k2c844irer",
          },
        ],
      },
    ],
  },
];

interface MCQ {
  question: string;
  options: string[];
  correct: string; // 'A', 'B', 'C', 'D'
  explanation: string;
  time: number; // in seconds
  points: number;
}

interface Quiz {
  id: string;
  title: string;
  plays: number;
  mcqs: MCQ[]; // Moved MCQs to quizzes
}

interface Subtopic {
  id: string;
  name: string;
  quizzes: Quiz[];
}

interface Topic {
  id: string;
  name: string;
  subtopics: Subtopic[];
}

interface Subject {
  id: string;
  name: string;
  topics: Topic[];
}

const subjects: Subject[] = [
  {
    id: "s1",
    name: "Math",
    topics: [
      {
        id: "t1",
        name: "Algebra",
        subtopics: [
          {
            id: "st1",
            name: "Linear Equations",
            quizzes: [
              {
                id: "q1",
                title: "Basics of Linear Equations",
                plays: 120,
                mcqs: [
                  {
                    question: "What is the general form of a linear equation in one variable?",
                    options: ["ax + b = 0", "ax^2 + bx + c = 0", "ax^3 + bx^2 + cx + d = 0", "a/x + b = 0"],
                    correct: "A",
                    explanation: "A linear equation is of degree 1, so ax + b = 0 where a ≠ 0.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "Solve: 2x + 5 = 11",
                    options: ["x = 3", "x = 4", "x = 8", "x = 2"],
                    correct: "A",
                    explanation: "Subtract 5: 2x = 6, divide by 2: x = 3.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "What is the solution to 3(x - 2) = 9?",
                    options: ["x = 5", "x = 3", "x = 1", "x = 7"],
                    correct: "A",
                    explanation: "Divide by 3: x - 2 = 3, add 2: x = 5.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "If 4x = 20, what is x?",
                    options: ["5", "4", "10", "20"],
                    correct: "A",
                    explanation: "Divide both sides by 4: x = 5.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Solve for y: y/3 + 2 = 5",
                    options: ["y = 9", "y = 3", "y = 15", "y = 1"],
                    correct: "A",
                    explanation: "Subtract 2: y/3 = 3, multiply by 3: y = 9.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is the value of x in x + 7 = 10?",
                    options: ["3", "17", "10", "7"],
                    correct: "A",
                    explanation: "Subtract 7: x = 3.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Solve: 5x - 10 = 0",
                    options: ["x = 2", "x = 0", "x = 10", "x = 5"],
                    correct: "A",
                    explanation: "Add 10: 5x = 10, divide by 5: x = 2.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "If 2(x + 3) = 8, what is x?",
                    options: ["1", "5", "2", "4"],
                    correct: "A",
                    explanation: "Divide by 2: x + 3 = 4, subtract 3: x = 1.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "Solve for z: z - 4 = 6",
                    options: ["10", "2", "-2", "4"],
                    correct: "A",
                    explanation: "Add 4: z = 10.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "What is the solution to 7x = 49?",
                    options: ["7", "42", "56", "0"],
                    correct: "A",
                    explanation: "Divide by 7: x = 7.",
                    time: 30,
                    points: 1
                  }
                ]
              },
              {
                id: "q2",
                title: "Solve for X",
                plays: 95,
                mcqs: [
                  {
                    question: "Solve: x + 3 = 12",
                    options: ["9", "15", "6", "3"],
                    correct: "A",
                    explanation: "Subtract 3: x = 12 - 3 = 9.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "What is x in 2x - 4 = 10?",
                    options: ["7", "3", "14", "5"],
                    correct: "A",
                    explanation: "Add 4: 2x = 14, divide by 2: x = 7.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Solve: 3x + 6 = 15",
                    options: ["3", "5", "9", "1"],
                    correct: "A",
                    explanation: "Subtract 6: 3x = 9, divide by 3: x = 3.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "If x/2 = 5, what is x?",
                    options: ["10", "5", "2", "15"],
                    correct: "A",
                    explanation: "Multiply by 2: x = 10.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Solve: 4(x - 1) = 8",
                    options: ["3", "2", "4", "1"],
                    correct: "A",
                    explanation: "Divide by 4: x - 1 = 2, add 1: x = 3.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is x in 5x + 5 = 20?",
                    options: ["3", "4", "5", "2"],
                    correct: "A",
                    explanation: "Subtract 5: 5x = 15, divide by 5: x = 3.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Solve: x - 5 = -2",
                    options: ["3", "-3", "2", "5"],
                    correct: "A",
                    explanation: "Add 5: x = -2 + 5 = 3.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "If 6x = 18, what is x?",
                    options: ["3", "6", "12", "9"],
                    correct: "A",
                    explanation: "Divide by 6: x = 3.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Solve: 2x + 10 = 14",
                    options: ["2", "4", "7", "3"],
                    correct: "A",
                    explanation: "Subtract 10: 2x = 4, divide by 2: x = 2.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "What is x in x/4 + 2 = 3?",
                    options: ["4", "8", "2", "6"],
                    correct: "A",
                    explanation: "Subtract 2: x/4 = 1, multiply by 4: x = 4.",
                    time: 60,
                    points: 1
                  }
                ]
              }
            ]
          },
          {
            id: "st2",
            name: "Quadratic Equations",
            quizzes: [
              {
                id: "q3",
                title: "Quadratic Formula",
                plays: 60,
                mcqs: [
                  {
                    question: "What is the quadratic formula?",
                    options: ["x = [-b ± sqrt(b² - 4ac)] / (2a)", "x = -b ± sqrt(b² - 4ac)", "x = [b ± sqrt(b² - 4ac)] / (2a)", "x = [-b ± sqrt(b² + 4ac)] / (2a)"],
                    correct: "A",
                    explanation: "The standard quadratic formula for ax² + bx + c = 0.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "Solve x² - 5x + 6 = 0",
                    options: ["x=2,3", "x=1,4", "x=0,5", "x=-2,-3"],
                    correct: "A",
                    explanation: "Factors to (x-2)(x-3)=0, so x=2 or 3.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is the discriminant of x² + 4x + 4 = 0?",
                    options: ["0", "16", "8", "4"],
                    correct: "A",
                    explanation: "b² - 4ac = 16 - 16 = 0.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Solve 2x² + 3x - 2 = 0",
                    options: ["x=0.5,-2", "x=1,-2", "x=0.5,2", "x=-0.5,2"],
                    correct: "A",
                    explanation: "Using formula: x = [-3 ± sqrt(9 + 16)]/4 = [-3 ± 5]/4, so 0.5 or -2.",
                    time: 90,
                    points: 2
                  },
                  {
                    question: "How many roots does a quadratic equation have if discriminant > 0?",
                    options: ["Two real", "One real", "None", "Two complex"],
                    correct: "A",
                    explanation: "Positive discriminant means two distinct real roots.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "What is the sum of roots for x² - 7x + 10 = 0?",
                    options: ["7", "10", "-7", "2"],
                    correct: "A",
                    explanation: "Sum of roots = -b/a = 7.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is the product of roots for 3x² + 6x + 3 = 0?",
                    options: ["1", "2", "3", "6"],
                    correct: "A",
                    explanation: "Product = c/a = 3/3 = 1.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Solve x² = 9",
                    options: ["x=±3", "x=3", "x=-3", "x=0"],
                    correct: "A",
                    explanation: "Square root both sides: x = ±3.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "What is the vertex form of a quadratic?",
                    options: ["a(x-h)² + k", "ax² + bx + c", "x = [-b ± sqrt]/2a", "None"],
                    correct: "A",
                    explanation: "Vertex form shows the vertex (h,k).",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "If discriminant = 0, how many roots?",
                    options: ["One real (repeated)", "Two real", "Two complex", "None"],
                    correct: "A",
                    explanation: "Zero discriminant means one real root with multiplicity two.",
                    time: 45,
                    points: 1
                  }
                ]
              }
            ]
          },
          { id: "st3", name: "Polynomials", quizzes: [] },
          { id: "st4", name: "Inequalities", quizzes: [] },
          { id: "st5", name: "Functions", quizzes: [] },
        ]
      },
      {
        id: "t2",
        name: "Geometry",
        subtopics: [
          {
            id: "st3",
            name: "Triangles",
            quizzes: [
              {
                id: "q4",
                title: "Types of Triangles",
                plays: 88,
                mcqs: [
                  {
                    question: "What is an equilateral triangle?",
                    options: ["All sides equal", "Two sides equal", "No sides equal", "Right angle"],
                    correct: "A",
                    explanation: "Equilateral means all three sides are of equal length.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Sum of angles in a triangle?",
                    options: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
                    correct: "A",
                    explanation: "The interior angles always sum to 180°.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "What is an isosceles triangle?",
                    options: ["Two sides equal", "All sides equal", "Right angle", "Obtuse angle"],
                    correct: "A",
                    explanation: "Isosceles has at least two equal sides.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Define scalene triangle.",
                    options: ["No equal sides", "Two equal sides", "All equal sides", "Right angle"],
                    correct: "A",
                    explanation: "Scalene has all sides of different lengths.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "What is a right-angled triangle?",
                    options: ["One 90° angle", "All angles acute", "One obtuse angle", "All angles equal"],
                    correct: "A",
                    explanation: "Has exactly one right angle.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Pythagoras theorem applies to?",
                    options: ["Right triangles", "All triangles", "Equilateral", "Isosceles"],
                    correct: "A",
                    explanation: "a² + b² = c² for right-angled triangles.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is an acute triangle?",
                    options: ["All angles <90°", "One angle >90°", "One 90° angle", "Two 90° angles"],
                    correct: "A",
                    explanation: "All interior angles are acute.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Obtuse triangle has?",
                    options: ["One angle >90°", "All <90°", "One 90°", "All >90°"],
                    correct: "A",
                    explanation: "Exactly one obtuse angle.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Area of triangle formula?",
                    options: ["(1/2)base*height", "base*height", "(1/3)base*height", "pi*r²"],
                    correct: "A",
                    explanation: "Standard area formula is (1/2)*b*h.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Perimeter of equilateral triangle with side a?",
                    options: ["3a", "2a", "a²", "4a"],
                    correct: "A",
                    explanation: "Sum of sides: a + a + a = 3a.",
                    time: 30,
                    points: 1
                  }
                ]
              }
            ]
          },
          { id: "st7", name: "Circles", quizzes: [] },
          { id: "st8", name: "Quadrilaterals", quizzes: [] },
          { id: "st9", name: "Coordinate Geometry", quizzes: [] },
          { id: "st10", name: "3D Geometry", quizzes: [] },
        ]
      },
      {
        id: "t3",
        name: "Calculus",
        subtopics: [
          { id: "st11", name: "Limits", quizzes: [] },
          { id: "st12", name: "Derivatives", quizzes: [] },
          { id: "st13", name: "Integrals", quizzes: [] },
          { id: "st14", name: "Differential Equations", quizzes: [] },
          { id: "st15", name: "Series", quizzes: [] },
        ],
      },
      {
        id: "t4",
        name: "Statistics",
        subtopics: [
          { id: "st16", name: "Descriptive Statistics", quizzes: [] },
          { id: "st17", name: "Probability", quizzes: [] },
          { id: "st18", name: "Statistical Inference", quizzes: [] },
          { id: "st19", name: "Regression Analysis", quizzes: [] },
          { id: "st20", name: "Data Analysis", quizzes: [] },
        ],
      },
      {
        id: "t5",
        name: "Trigonometry",
        subtopics: [
          { id: "st21", name: "Trigonometric Functions", quizzes: [] },
          { id: "st22", name: "Identities", quizzes: [] },
          { id: "st23", name: "Trigonometric Equations", quizzes: [] },
          { id: "st24", name: "Laws of Sines and Cosines", quizzes: [] },
          { id: "st25", name: "Applications of Trigonometry", quizzes: [] },
        ],
      },
    ]
  },
  {
    id: "s2",
    name: "Science",
    topics: [
      {
        id: "t3",
        name: "Physics",
        subtopics: [
          {
            id: "st4",
            name: "Motion",
            quizzes: [
              {
                id: "q5",
                title: "Newton's Laws",
                plays: 150,
                mcqs: [
                  {
                    question: "What is Newton's First Law?",
                    options: ["Inertia", "F=ma", "Action-reaction", "Gravity"],
                    correct: "A",
                    explanation: "An object at rest stays at rest, in motion stays in motion unless acted upon.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "Newton's Second Law?",
                    options: ["F = ma", "Inertia", "Action-reaction", "Universal gravitation"],
                    correct: "A",
                    explanation: "Force equals mass times acceleration.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Newton's Third Law?",
                    options: ["Action-reaction", "F=ma", "Inertia", "E=mc²"],
                    correct: "A",
                    explanation: "For every action, there is an equal and opposite reaction.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "What is speed?",
                    options: ["Distance/time", "Displacement/time", "Mass/volume", "Force/area"],
                    correct: "A",
                    explanation: "Scalar quantity: distance divided by time.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Velocity is?",
                    options: ["Speed with direction", "Speed without direction", "Acceleration", "Force"],
                    correct: "A",
                    explanation: "Vector quantity including direction.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "Acceleration is change in?",
                    options: ["Velocity over time", "Speed over time", "Distance over time", "Force over time"],
                    correct: "A",
                    explanation: "Rate of change of velocity.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "Uniform motion means?",
                    options: ["Constant velocity", "Changing velocity", "Zero velocity", "Constant acceleration"],
                    correct: "A",
                    explanation: "No acceleration, steady velocity.",
                    time: 45,
                    points: 1
                  },
                  {
                    question: "What is free fall?",
                    options: ["Motion under gravity only", "Motion without gravity", "Horizontal motion", "Circular motion"],
                    correct: "A",
                    explanation: "Object falling solely under gravitational force.",
                    time: 60,
                    points: 1
                  },
                  {
                    question: "SI unit of acceleration?",
                    options: ["m/s²", "m/s", "kg/m³", "N"],
                    correct: "A",
                    explanation: "Meters per second squared.",
                    time: 30,
                    points: 1
                  },
                  {
                    question: "Displacement is?",
                    options: ["Shortest path from start to end", "Total path length", "Speed * time", "Force * distance"],
                    correct: "A",
                    explanation: "Vector from initial to final position.",
                    time: 45,
                    points: 1
                  }
                ]
              }
            ]
          },
          { id: "st27", name: "Forces and Newton’s Laws", quizzes: [] },
          { id: "st28", name: "Energy and Work", quizzes: [] },
          { id: "st29", name: "Waves and Sound", quizzes: [] },
          { id: "st30", name: "Electricity and Magnetism", quizzes: [] },
        ]
      },
      {
        id: "t7",
        name: "Chemistry",
        subtopics: [
          { id: "st31", name: "Atomic Structure", quizzes: [] },
          { id: "st32", name: "Chemical Bonding", quizzes: [] },
          { id: "st33", name: "Chemical Reactions", quizzes: [] },
          { id: "st34", name: "Periodic Table", quizzes: [] },
          { id: "st35", name: "Organic Chemistry", quizzes: [] },
        ],
      },
      {
        id: "t8",
        name: "Biology",
        subtopics: [
          { id: "st36", name: "Cell Biology", quizzes: [] },
          { id: "st37", name: "Genetics", quizzes: [] },
          { id: "st38", name: "Ecology", quizzes: [] },
          { id: "st39", name: "Evolution", quizzes: [] },
          { id: "st40", name: "Human Anatomy", quizzes: [] },
        ],
      },
      {
        id: "t9",
        name: "Earth Science",
        subtopics: [
          { id: "st41", name: "Geology", quizzes: [] },
          { id: "st42", name: "Meteorology", quizzes: [] },
          { id: "st43", name: "Oceanography", quizzes: [] },
          { id: "st44", name: "Astronomy", quizzes: [] },
          { id: "st45", name: "Plate Tectonics", quizzes: [] },
        ],
      },
      {
        id: "t10",
        name: "Environmental Science",
        subtopics: [
          { id: "st46", name: "Ecosystems", quizzes: [] },
          { id: "st47", name: "Pollution", quizzes: [] },
          { id: "st48", name: "Conservation", quizzes: [] },
          { id: "st49", name: "Climate Change", quizzes: [] },
          { id: "st50", name: "Sustainable Development", quizzes: [] },
        ],
      },
    ]
  },
    {
    id: "s3",
    name: "History",
    topics: [
      {
        id: "t11",
        name: "Ancient History",
        subtopics: [
          { id: "st51", name: "Ancient Civilizations", quizzes: [] },
          { id: "st52", name: "Mesopotamia", quizzes: [] },
          { id: "st53", name: "Ancient Egypt", quizzes: [] },
          { id: "st54", name: "Ancient Greece", quizzes: [] },
          { id: "st55", name: "Ancient Rome", quizzes: [] },
        ],
      },
      {
        id: "t12",
        name: "Medieval History",
        subtopics: [
          { id: "st56", name: "Feudalism", quizzes: [] },
          { id: "st57", name: "The Crusades", quizzes: [] },
          { id: "st58", name: "Middle Ages in Europe", quizzes: [] },
          { id: "st59", name: "Byzantine Empire", quizzes: [] },
          { id: "st60", name: "Islamic Golden Age", quizzes: [] },
        ],
      },
      {
        id: "t13",
        name: "Modern History",
        subtopics: [
          { id: "st61", name: "Renaissance", quizzes: [] },
          { id: "st62", name: "Industrial Revolution", quizzes: [] },
          { id: "st63", name: "World Wars", quizzes: [] },
          { id: "st64", name: "Cold War", quizzes: [] },
          { id: "st65", name: "Decolonization", quizzes: [] },
        ],
      },
      {
        id: "t14",
        name: "American History",
        subtopics: [
          { id: "st66", name: "Colonial America", quizzes: [] },
          { id: "st67", name: "American Revolution", quizzes: [] },
          { id: "st68", name: "Civil War", quizzes: [] },
          { id: "st69", name: "Civil Rights Movement", quizzes: [] },
          { id: "st70", name: "Modern America", quizzes: [] },
        ],
      },
      {
        id: "t15",
        name: "World History",
        subtopics: [
          { id: "st71", name: "Global Empires", quizzes: [] },
          { id: "st72", name: "Trade Routes", quizzes: [] },
          { id: "st73", name: "Cultural Exchanges", quizzes: [] },
          { id: "st74", name: "Modern Globalization", quizzes: [] },
          { id: "st75", name: "World Conflicts", quizzes: [] },
        ],
      },
    ],
  },
  {
    id: "s4",
    name: "Literature",
    topics: [
      {
        id: "t16",
        name: "Classical Literature",
        subtopics: [
          { id: "st76", name: "Greek and Roman Works", quizzes: [] },
          { id: "st77", name: "Epic Poetry", quizzes: [] },
          { id: "st78", name: "Tragedies", quizzes: [] },
          { id: "st79", name: "Mythology in Literature", quizzes: [] },
          { id: "st80", name: "Ancient Drama", quizzes: [] },
        ],
      },
      {
        id: "t17",
        name: "Medieval Literature",
        subtopics: [
          { id: "st81", name: "Chivalric Romances", quizzes: [] },
          { id: "st82", name: "Allegory", quizzes: [] },
          { id: "st83", name: "Religious Texts", quizzes: [] },
          { id: "st84", name: "Courtly Love", quizzes: [] },
          { id: "st85", name: "Medieval Epics", quizzes: [] },
        ],
      },
      {
        id: "t18",
        name: "Modern Literature",
        subtopics: [
          { id: "st86", name: "Realism", quizzes: [] },
          { id: "st87", name: "Modernism", quizzes: [] },
          { id: "st88", name: "Postmodernism", quizzes: [] },
          { id: "st89", name: "Contemporary Novels", quizzes: [] },
          { id: "st90", name: "Science Fiction", quizzes: [] },
        ],
      },
      {
        id: "t19",
        name: "Poetry",
        subtopics: [
          { id: "st91", name: "Sonnet Forms", quizzes: [] },
          { id: "st92", name: "Romantic Poetry", quizzes: [] },
          { id: "st93", name: "Narrative Poetry", quizzes: [] },
          { id: "st94", name: "Modern Poetry", quizzes: [] },
          { id: "st95", name: "Poetic Devices", quizzes: [] },
        ],
      },
      {
        id: "t20",
        name: "Drama",
        subtopics: [
          { id: "st96", name: "Shakespearean Plays", quizzes: [] },
          { id: "st97", name: "Modern Drama", quizzes: [] },
          { id: "st98", name: "Tragedy and Comedy", quizzes: [] },
          { id: "st99", name: "Theater Movements", quizzes: [] },
          { id: "st100", name: "Playwriting Techniques", quizzes: [] },
        ],
      },
    ],
  },
  {
    id: "s5",
    name: "Geography",
    topics: [
      {
        id: "t21",
        name: "Physical Geography",
        subtopics: [
          { id: "st101", name: "Landforms", quizzes: [] },
          { id: "st102", name: "Climate Zones", quizzes: [] },
          { id: "st103", name: "Hydrology", quizzes: [] },
          { id: "st104", name: "Biomes", quizzes: [] },
          { id: "st105", name: "Natural Disasters", quizzes: [] },
        ],
      },
      {
        id: "t22",
        name: "Human Geography",
        subtopics: [
          { id: "st106", name: "Population Geography", quizzes: [] },
          { id: "st107", name: "Urban Geography", quizzes: [] },
          { id: "st108", name: "Cultural Geography", quizzes: [] },
          { id: "st109", name: "Economic Geography", quizzes: [] },
          { id: "st110", name: "Political Geography", quizzes: [] },
        ],
      },
      {
        id: "t23",
        name: "Regional Geography",
        subtopics: [
          { id: "st111", name: "Asia", quizzes: [] },
          { id: "st112", name: "Africa", quizzes: [] },
          { id: "st113", name: "Europe", quizzes: [] },
          { id: "st114", name: "Americas", quizzes: [] },
          { id: "st115", name: "Oceania", quizzes: [] },
        ],
      },
      {
        id: "t24",
        name: "Cartography",
        subtopics: [
          { id: "st116", name: "Map Types", quizzes: [] },
          { id: "st117", name: "Map Projections", quizzes: [] },
          { id: "st118", name: "GIS Technology", quizzes: [] },
          { id: "st119", name: "Topographic Maps", quizzes: [] },
          { id: "st120", name: "Thematic Maps", quizzes: [] },
        ],
      },
      {
        id: "t25",
        name: "Environmental Geography",
        subtopics: [
          { id: "st121", name: "Resource Management", quizzes: [] },
          { id: "st122", name: "Deforestation", quizzes: [] },
          { id: "st123", name: "Urbanization", quizzes: [] },
          { id: "st124", name: "Land Use", quizzes: [] },
          { id: "st125", name: "Biodiversity", quizzes: [] },
        ],
      },
    ],
  },
];

export default subjects;
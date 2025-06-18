const FLASH_CARDS = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answer: "the Constitution",
    image: "/src/assets/constitution.webp",
    layout: "left"
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answer: "sets up the government",
    image: "/src/assets/national_mall.webp",
    layout: "left"
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "We the People",
    image: "/src/assets/we_the_people.webp",
    layout: "top"
  },
  {
    id: 4,
    question: "What is an amendment?",
    answer: "a change to the Constitution",
    image: "/src/assets/amendment.webp",
    layout: "right"
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "the Bill of Rights",
    image: "/src/assets/bill_of_rights.webp",
    layout: "right"
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answer: "speech",
    image: "/src/assets/speech.webp",
    layout: "left"
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answer: "twenty-seven (27)",
    image: "/src/assets/constitution_amendments_count.webp",
    layout: "right"
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answer: "announced our independence (from Great Britain)",
    image: "/src/assets/declaration_of_independence_purpose.webp",
    layout: "right"
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    answer: "life and liberty",
    image: "/src/assets/declaration_rights.webp",
    layout: "right"
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion.",
    image: "/src/assets/freedom_of_religion.webp",
    layout: "right"
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answer: "capitalist economy",
    image: "/src/assets/us_economic_system.webp",
    layout: "left"
  },
  {
    id: 12,
    question: "What is the 'rule of law'?",
    answer: "Everyone must follow the law.",
    image: "/src/assets/rule_of_law.webp",
    layout: "left"
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answer: "Congress",
    image: "/src/assets/government_branch.webp",
    layout: "right"
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answer: "checks and balances",
    image: "/src/assets/checks_balances.webp",
    layout: "left"
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answer: "the President",
    image: "/src/assets/executive_branch_head.webp",
    layout: "top"
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answer: "Congress",
    image: "/src/assets/federal_law_makers.webp",
    layout: "left"
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    answer: "the Senate and House of Representatives",
    image: "/src/assets/congress_parts.webp",
    layout: "right"
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    answer: "one hundred",
    image: "/src/assets/senators_count.webp",
    layout: "top"
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    answer: "six",
    image: "/src/assets/senator_term_length.webp",
    layout: "top"
  },
  {
    id: 20,
    question: "Who is one of your state's U.S. Senators now?",
    answer: "Tammy Duckworth",
    image: "/src/assets/your_state_senator.webp",
    layout: "left"
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answer: "four hundred thirty-five",
    image: "/src/assets/house_members_count.webp",
    layout: "top"
  },
  {
    id: 22,
    question: "We elect a U.S. Representative for how many years?",
    answer: "for two years",
    image: "/src/assets/representative_term_length.webp",
    layout: "left"
  },
  {
    id: 23,
    question: "Name your U.S. Representative.",
    answer: "Janice Schakowsky",
    image: "/src/assets/your_us_representative.webp",
    layout: "left"
  },
  {
    id: 24,
    question: "Who does a U.S. Senator represent?",
    answer: "all people of the state",
    image: "/src/assets/senator_represents.webp",
    layout: "top"
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    answer: "because of the state's population",
    image: "/src/assets/representatives_per_state_reason.webp",
    layout: "right"
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    answer: "for four years",
    image: "/src/assets/president_term_length.webp",
    layout: "left"
  },
  {
    id: 27,
    question: "In what month do we vote for President?",
    answer: "November",
    image: "/src/assets/presidential_election_month.webp",
    layout: "top"
  },
  {
    id: 28,
    question: "What is the name of the President of the United States now?",
    answer: "Donald Trump",
    image: "/src/assets/current_president_name.webp"
  },
  {
    id: 29,
    question: "What is the name of the Vice President of the United States now?",
    answer: "J.D. Vance",
    image: "/src/assets/current_vp_name.webp"
  },
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    answer: "the Vice President",
    image: "/src/assets/presidential_succession_vp.webp",
    layout: "right"
  },
  {
    id: 31,
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "the Speaker of the House",
    image: "/src/assets/presidential_succession_speaker.webp",
    layout: "left"
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    answer: "the President",
    image: "/src/assets/commander_in_chief.webp",
    layout: "right"
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    answer: "the President",
    image: "/src/assets/signing_bills.webp",
    layout: "left"
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    answer: "the President",
    image: "/src/assets/vetoing_bills.webp",
    layout: "left"
  },
  {
    id: 35,
    question: "What does the President's Cabinet do?",
    answer: "advises the President",
    image: "/src/assets/presidential_cabinet_duties.webp"
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    answer: "Secretary of labor and Secretary of education",
  },
  {
    id: 37,
    question: "What does the judicial branch do?",
    answer: "reviews laws",
    image: "/src/assets/judicial_branch_duties.webp",
    layout: "left"
  }
]

export default FLASH_CARDS;
import photo1 from './assets/constitution.webp'
import photo2 from './assets/national_mall.webp'
import photo3 from './assets/we_the_people.webp'
import photo4 from './assets/amendment.webp'
import photo5 from './assets/bill_of_rights.webp'
import photo6 from './assets/speech.webp'
import photo7 from './assets/constitution_amendments_count.webp'
import photo8 from './assets/declaration_of_independence_purpose.webp'
import photo9 from './assets/declaration_rights.webp'
import photo10 from './assets/freedom_of_religion.webp'
import photo11 from './assets/us_economic_system.webp'
import photo12 from './assets/rule_of_law.webp'
import photo13 from './assets/government_branch.webp'
import photo14 from './assets/checks_balances.webp'
import photo15 from './assets/executive_branch_head.webp'
import photo16 from './assets/federal_law_makers.webp'
import photo17 from './assets/congress_parts.webp'
import photo18 from './assets/senators_count.webp'
import photo19 from './assets/senator_term_length.webp'
import photo20 from './assets/your_state_senator.webp'
import photo21 from './assets/house_members_count.webp'
import photo22 from './assets/representative_term_length.webp'
import photo23 from './assets/your_us_representative.webp'
import photo24 from './assets/senator_represents.webp'
import photo25 from './assets/representatives_per_state_reason.webp'
import photo26 from './assets/president_term_length.webp'
import photo27 from './assets/presidential_election_month.webp'
import photo28 from './assets/current_president_name.webp'
import photo29 from './assets/current_vp_name.webp'
import photo30 from './assets/presidential_succession_vp.webp'
import photo31 from './assets/presidential_succession_speaker.webp'
import photo32 from './assets/commander_in_chief.webp'
import photo33 from './assets/signing_bills.webp'
import photo34 from './assets/vetoing_bills.webp'
import photo35 from './assets/presidential_cabinet_duties.webp'
import photo37 from './assets/judicial_branch_duties.webp'


const FLASH_CARDS = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answer: "the Constitution",
    image: photo1,
    layout: "left"
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answer: "sets up the government",
    image: photo2,
    layout: "left"
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "We the People",
    image: photo3,
    layout: "top"
  },
  {
    id: 4,
    question: "What is an amendment?",
    answer: "a change to the Constitution",
    image: photo4,
    layout: "right"
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "the Bill of Rights",
    image: photo5,
    layout: "right"
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answer: "speech",
    image: photo6,
    layout: "left"
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answer: "twenty-seven (27)",
    image: photo7,
    layout: "right"
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answer: "announced our independence (from Great Britain)",
    image: photo8,
    layout: "right"
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    answer: "life and liberty",
    image: photo9,
    layout: "right"
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion.",
    image: photo10,
    layout: "right"
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answer: "capitalist economy",
    image: photo11,
    layout: "left"
  },
  {
    id: 12,
    question: "What is the 'rule of law'?",
    answer: "Everyone must follow the law.",
    image: photo12,
    layout: "left"
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answer: "Congress",
    image: photo13,
    layout: "right"
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answer: "checks and balances",
    image: photo14,
    layout: "left"
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answer: "the President",
    image: photo15,
    layout: "top"
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answer: "Congress",
    image: photo16,
    layout: "left"
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    answer: "the Senate and House of Representatives",
    image: photo17,
    layout: "right"
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    answer: "one hundred",
    image: photo18,
    layout: "top"
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    answer: "six",
    image: photo19,
    layout: "top"
  },
  {
    id: 20,
    question: "Who is one of your state's U.S. Senators now?",
    answer: "Tammy Duckworth",
    image: photo20,
    layout: "left"
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answer: "four hundred thirty-five",
    image: photo21,
    layout: "top"
  },
  {
    id: 22,
    question: "We elect a U.S. Representative for how many years?",
    answer: "for two years",
    image: photo22,
    layout: "left"
  },
  {
    id: 23,
    question: "Name your U.S. Representative.",
    answer: "Janice Schakowsky",
    image: photo23,
    layout: "left"
  },
  {
    id: 24,
    question: "Who does a U.S. Senator represent?",
    answer: "all people of the state",
    image: photo24,
    layout: "top"
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    answer: "because of the state's population",
    image: photo25,
    layout: "right"
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    answer: "for four years",
    image: photo26,
    layout: "left"
  },
  {
    id: 27,
    question: "In what month do we vote for President?",
    answer: "November",
    image: photo27,
    layout: "top"
  },
  {
    id: 28,
    question: "What is the name of the President of the United States now?",
    answer: "Donald Trump",
    image: photo28,
    layout: "right"
  },
  {
    id: 29,
    question: "What is the name of the Vice President of the United States now?",
    answer: "J.D. Vance",
    image: photo29,
    layout: "right"
  },
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    answer: "the Vice President",
    image: photo30,
    layout: "right"
  },
  {
    id: 31,
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "the Speaker of the House",
    image: photo31,
    layout: "left"
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    answer: "the President",
    image: photo32,
    layout: "right"
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    answer: "the President",
    image: photo33,
    layout: "left"
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    answer: "the President",
    image: photo34,
    layout: "left"
  },
  {
    id: 35,
    question: "What does the President's Cabinet do?",
    answer: "advises the President",
    image: photo35,
    layout: "right"
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    answer: "Secretary of labor and Secretary of education"
  },
  {
    id: 37,
    question: "What does the judicial branch do?",
    answer: "reviews laws",
    image: photo37,
    layout: "left"
  }
]

export default FLASH_CARDS;
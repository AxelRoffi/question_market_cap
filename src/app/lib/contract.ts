import { BaseContract } from "@thirdweb-dev/sdk";

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

export interface Question {
  id: number;
  question: string;
  currentAnswer: string;
  owner: string;
  currentPrice: number;
  lastPrice: number;
  labels: number[];
  totalVolume: number;
}

export interface QuestionInput {
  question: string;
  initialPrice: number;
  labels: number[];
}

export const contractABI = [
  {
    name: "createQuestion",
    type: "function",
    inputs: [
      { name: "question", type: "string" },
      { name: "initialPrice", type: "uint256" },
      { name: "labels", type: "uint256[]" }
    ],
    outputs: [{ type: "uint256" }],
    stateMutability: "nonpayable"
  },
  {
    name: "buyAnswer",
    type: "function",
    inputs: [
      { name: "questionId", type: "uint256" },
      { name: "newAnswer", type: "string" }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    name: "getQuestion",
    type: "function",
    inputs: [{ name: "questionId", type: "uint256" }],
    outputs: [
      {
        components: [
          { name: "id", type: "uint256" },
          { name: "question", type: "string" },
          { name: "currentAnswer", type: "string" },
          { name: "owner", type: "address" },
          { name: "currentPrice", type: "uint256" },
          { name: "lastPrice", type: "uint256" },
          { name: "labels", type: "uint256[]" },
          { name: "totalVolume", type: "uint256" }
        ],
        type: "tuple"
      }
    ],
    stateMutability: "view"
  }
];

export async function getContractInstance(contract: BaseContract) {
  if (!CONTRACT_ADDRESS) {
    throw new Error("Contract address not found in environment variables");
  }
  return await contract.getAddress();
}
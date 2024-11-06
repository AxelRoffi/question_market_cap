'use client';

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS, contractABI, type Question } from "@/app/lib/contract";
import { CustomConnectWallet } from "../web3/ConnectWallet";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export function QuestionsTable() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { contract } = useContract(CONTRACT_ADDRESS, contractABI);
  
  const { data: totalQuestions, isLoading: loadingTotal } = useContractRead(
    contract,
    "totalQuestions"
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!contract || !totalQuestions) return;
      
      const fetchedQuestions: Question[] = [];
      for (let i = 1; i <= Number(totalQuestions); i++) {
        const question = await contract.call("getQuestion", [i]);
        fetchedQuestions.push({
          ...question,
          currentPrice: Number(ethers.utils.formatUnits(question.currentPrice, 18)),
          lastPrice: Number(ethers.utils.formatUnits(question.lastPrice, 18)),
        });
      }
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, [contract, totalQuestions]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6">Questions</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all questions and their current answers.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <CustomConnectWallet />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold">
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                    Question
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                    Current Answer
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                    Volume
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {questions.map((question) => (
                  <tr key={question.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium">
                      {question.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {question.question}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {question.currentAnswer}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {question.currentPrice} ETH
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {question.totalVolume} ETH
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                      <button
                        onClick={() => {/* TODO: Implement buy answer */}}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Buy Answer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
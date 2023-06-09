// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
   uint public taskCount = 0;

   struct Task {
       uint id;
       string content;
       bool completed;
   }

   mapping(uint => Task) public tasks;

   constructor () {
      CreateTask("Check Out your first task");
   }

   function CreateTask(string memory _content) public{
      taskCount ++;
      tasks[taskCount] = Task(taskCount, _content, false);
   }
}
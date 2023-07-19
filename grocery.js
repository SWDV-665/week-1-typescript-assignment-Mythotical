// grocery.js

import { groceries } from './grocery.ts';

const ul = document.querySelector('ul');

groceries.forEach(grocery => {
  const li = document.createElement('li');
  li.textContent = `${grocery.name} (${grocery.category}): ${grocery.quantity}`;
  ul.appendChild(li);
});
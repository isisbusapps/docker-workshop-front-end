import "./style.css"

async function getLatestProposals() {
  return fetch("http://localhost:5000/latest-proposals")
    .then(result => result.json());
}

async function displayProposals() {
  const proposals = await getLatestProposals();

  const listElement = document.createElement('ol');
  proposals.forEach(proposal => {
    const proposalItem = document.createElement('li');
    proposalItem.innerText = proposal.rb + ": " + proposal.title
    listElement.append(proposalItem)
  });

  const container = document.querySelector("#latest-proposals");
  container.append(listElement);
}

displayProposals();

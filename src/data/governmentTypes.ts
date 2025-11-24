export const governmentDefinitions: Record<string, string> = {
    "Federal Republic": "A country made up of smaller states that have their own power, but share a central government (like the US or Germany).",
    "Federal parliamentary democracy": "A country with states and a central government where people vote for a parliament, which then chooses the leader (Prime Minister).",
    "Unitary presidential constitutional republic": "A single central government where a president is the head, and everyone follows a constitution.",
    "Unitary parliamentary democracy": "A single central government where people vote for a parliament, which chooses the leader.",
    "Unitary socialist state": "A country run by a single party that aims to own and manage resources for everyone.",
    "Unitary semi-presidential democracy": "A country with both a president and a prime minister who share power.",
    "Unitary federal republic": "This is a bit of a mix! Usually means a country that calls itself federal but operates very centrally.",
    "Unitary parliamentary republic": "A country with a parliament that holds the power, and a president who is mostly a figurehead.",
    "Constitutional monarchy": "A country with a King or Queen, but they don't have real power; the government is run by elected officials.",
    "Absolute monarchy": "A country where the King or Queen has total power.",
    "Communist state": "A country where the government owns all property and controls the economy.",
};

export const getGovernmentDefinition = (type: string): string => {
    // Try to find an exact match
    if (governmentDefinitions[type]) {
        return governmentDefinitions[type];
    }

    // Fallback for variations or if not found
    if (type.toLowerCase().includes("parliamentary")) {
        return "A system where the people elect a parliament, and the parliament chooses the leader.";
    }
    if (type.toLowerCase().includes("presidential")) {
        return "A system where the people elect a president directly.";
    }
    if (type.toLowerCase().includes("monarchy")) {
        return "A country with a King or Queen.";
    }

    return "A system of government.";
};

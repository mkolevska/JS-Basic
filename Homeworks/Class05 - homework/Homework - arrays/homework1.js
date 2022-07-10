
function tellStory(club, country, stadium) {
    
    let i = 0;
    let story = "";

    while (i < club.length && i < country.length && i < stadium.length) {

        story += `${club[i]} is the best club from ${country[i]}. Their stadium is called ${stadium[i]}. \n`
        i += 1
    }

    return story
}





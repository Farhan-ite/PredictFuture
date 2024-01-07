function showFuture(event) {
    event.preventDefault();

    // Get the entered name
    const friendName = document.getElementById('friendName').value.toLowerCase(); // Convert to lowercase for consistency

    // Display the result container
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';

    // Update the result content
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.src = `photos/${friendName}.jpg`; // Replace with actual photo path

    const resultName = document.getElementById('resultName');
    resultName.textContent = friendName;

    const resultParagraph = document.getElementById('resultParagraph');
    const future = getFriendFuture(friendName);
    resultParagraph.textContent = future;
}


function getFriendFuture(name) {
    // Manually add future predictions for each friend
    const futurePredictions = {
        muhtadee: "Muhtadee, the academic rival of Mubin, will accidentally discover a parallel universe where studying is considered a sport.He'll represent Earth in the Intergalactic Study Olympics, aiming for the gold medal in quantum physics.",
        farhan: "404 ERROR FUTURE NOT FOUND",
        sourav:"Sourav, the chatterbox connoisseur, will become a world-famous motivational speaker for fast-food enthusiasts. His TED Talk, 'Cheese and Change,' will inspire burger lovers worldwide to demand more cheese and embrace the art of talking with their mouths full. His fast-food empire, 'Sourav's Talkative Tasteland,' will redefine drive-thrus as mini comedy clubs",
        ajanto:"Ajanta, the secretive married man, will start a reality show where he challenges contestants to uncover the hidden truth.His mysterious wife will be revealed in the season finale, creating a buzz in the reality TV world",
        chaity:"Chaity, the class captain and matchmaker extraordinaire, will accidentally become a fortune teller, predicting relationships with her magic eight-ball algorithm.She'll organize a speed-dating event where couples are matched based on compatibility in solving Rubik's cubes.",
        chondrima:"Chondrima, the sweet poet trapped in the world of computer science, will invent a programming language that communicates exclusively through rhyming code.Her algorithms will be as sweet as her verses, making coding a poetic experience.",
        anika:"Anika, the mysterious talkative soul, will start a podcast where she shares unheard stories from behind her ever-present mask.The world will tune in to unravel the mystery of the girl with the invisible face.",
        ittewsaf:"Ittesaf, the smoking scholar and beverage enthusiast, will open a trendy café called 'Cigarettes & Sips.' Here, patrons will indulge in scholarly discussions over smoke-infused beverages. His signature drink, the 'Nicotine Nectar,' will be a hit, attracting both caffeine connoisseurs and those seeking enlightenment through smoke rings. He will be also known as the 'weedman' for his supply chains of weeds around the town!",
        mubin:"Mubin, the student-turned-teacher prodigy, will accidentally invent a subject so interesting that even textbooks can't resist reading it.He'll be known for his unconventional teaching methods, like solving math problems using interpretive dance.",
        avishek:"Avishek, the self-proclaimed genius, will take motivational speaking to new heights by sharing tales of his fictional adventures with Mark Zuckerberg 2.0. In his grand narrative, Avishek will claim to have exchanged philosophical ideas with Zuckerberg during intergalactic tea sessions.Inspired by these out-of-this-world conversations, Avishek will launch his own tech startup, 'AvisBook,' a platform for sharing genius cat memes and brainy dance tutorials. Despite the platform's unusual content, Avishek will confidently compare himself to Zuckerberg at every turn, earning him the title of 'Zukerberg's Lost Twin' in his university yearbook.",
        hasan:"Hasan, the sports enthusiast with questionable athletic skills, will accidentally become the coach of a professional hide-and-seek team.His team's secret strategy: talking loudly to distract opponents while hiding.",
        rajdip:"In the uproarious future of Rajdip, he becomes the ultimate multitasking maven. By day, he's the charming scholar acing exams and impressing professors. But by night, he transforms into the 'Kid-at-Heart Casanova,' hosting epic playdates with his squad of girls. His secret weapon? Mastering the art of flirting with dad jokes and showcasing academic excellence through impromptu bedtime stories. The campus legend whispers tales of Rajdip, the guy who balanced textbooks and teddy bears, proving that adulthood is just a state of mind.",
        sami:"Sami, the class representative with a knack for avoiding responsibilities, will accidentally become the leader of a group dedicated to procrastination.Meetings will be scheduled but never attended.",
        sharna:"Sharna, in future will become the sole rival of sheikh hasina to become the next prime-minister. In the general election of 2034 she will be elected as the new prime minister and 'muite' sheik hasina forever. Her right hand in politics would be none other than Ashik Sir form Metropolitan university. Together they will rule Bangladesh for years to come",
        ibnul:"Ibnul, the adventurous twin, will become a renowned travel blogger, exploring exotic destinations and documenting his experiences. However, his wife will often find herself mistaking Itkan for Ibnul and vice versa, leading to comical situations during their travels..They will be confused when their kid is born",
        itkan:"Itkan, the mischievous twin and popular content creator, will find his wife constantly confused between him and Ibnul, making for hilarious misunderstandings in their comedy sketches. Their followers will eagerly anticipate the moments when Itkan's wife accidentally pranks the wrong twin, adding an extra layer of humor to their content.",
        imran:"Imran, the introverted real estate tycoon in the making, will surprise everyone by developing a city made entirely of invisible houses.His quiet nature will turn into a superpower, allowing him to negotiate deals with a mere whisper. He is going to make millions(Iranian rial) , however he won't have money to treat his friends once in a while. All the waiters of the city would know him for not giving any tips.",
        hridoy: "In the futuristic sitcom of Hridoy's life, his split personalities stole the spotlight. By day, he was the silent ninja, but by night, his WhatsApp persona, 'Meme Maestro,' unleashed virtual chaos with meme-powered mayhem. Now, brace yourself: Hridoy's secret talent involves turning Obaidul Qader's political campaigns into a meme-fueled carnival. Move over traditional politics, it's time for the 'Meme-ocratic' revolution, where laughter wins votes, and Hridoy is the unexpected campaign manager with a punchline! Hridoy is the long lost child of Obaidul Qader"
        // Add more friends and their futures here
    };

    return futurePredictions[name.toLowerCase()] || "Unfortunately, I haven't predicted the future for this friend yet. Stay tuned!";
}

function goBack() {
    // Hide the result container and display the form container again
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'none';

    // Clear the entered name in the input field
    document.getElementById('friendName').value = '';
}

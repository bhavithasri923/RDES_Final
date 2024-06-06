function getBotResponse(input) {
    //rock paper scissors
    if (input == "I am looking some information about the website can you help?") {
        return "what is the preferred method of contact?";
    } else if (input == "I prefer to communicate through chat.It's convenient and easy") {
        return "Can you provide more details about issue?";
    } else if (input == "Yes, I can") {
        return "Can have your email address for further assistance?";
    }else if (input == "Yes") {
        return "would you like to receive updates?";
    }else if (input == "Yes") {
        return "ok we will send you updates to your mail id, anything else ?";
    }else if (input == "How to join in your organisation and admission process?") {
        return "Kindly visit the website sign in and take the test";
    }else if (input == "What are the courses provided?") {
        return "Web Development, Python, Java and Cloud Computing";
    }else if (input == "What is the main aim of this program?") {
        return "the aim of the program is to provide education for people virtually at free of cost";
    }else if (input == "Is this website only for urban people?") {
        return "No anyone can join this but our motto is to educate the people especially in rural areas";
    }else if (input == "Does any certification is provided after completion of course?") {
        return "Yes";
    }else if (input == "Does how many months does the course take to complete?") {
        return "It depends on the type of course tou taken?";
    }else if (input == "It is a free course or a paid one?") {
        return "It is completely free of cost with placements support also";
    }else if (input == "can you provide more information about your oraganisation") {
        return "kindly visit the website";
    }else if (input == "can i quit the course in middle?") {
        return "No you cann't";
    }else if (input == "what are the sessions timings?") {
        return "kindly visit the website";
    }else if (input == "How to get information about upcoming programs?") {
        return "kindly visit the website";
    }else if (input == "Did you any inspiration in starting the program?") {
        return "yes";
    }else if (input == "Can i know where it and when it was started?") {
        return "kindly visit the website";
    }else if (input == "can you add some more courses other than this?") {
        return "it depends on the requirement";
    }else if (input == "Do you provode only skills or you also give placement assistance") {
        return "kindly visit the website";
    }

    if (input == "hello") {
        return "Hello there! how can I assist you ?";
    }else if (input == "Hello"){
        return "Hello there! how can I assist you ?";
    }else if (input == "Hi") {
        return "Hello there! how can I assist you ?";
    }else if (input == "hi") {
        return "Hello there! how can I assist you ?";
    }else if (input == "Good Morning") {
        return "Very Good Morning";
    }else if (input == "Good afternoon") {
        return "Good noon";
    }else {
        return "I can't understand what you are saying, try asking something else!";
    }
}


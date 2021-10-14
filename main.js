
const questions = {
    1: "I have a desire to speak direct messages from God that edify or exhort or comfort others.",

    2: "I have enjoyed relating to a certain group of people over a long period of time, "
    + "sharing personally in their successes and failures.",

    3: "People have told me that I have helped them learn some biblical truth in a meaningful way.",

    4: "I have applied spiritual truth effectively to situations in my own life.",

    5: "Others have told me that I have helped them distinguish key and important facts of scripture." ,

    6: "I have verbally encouraged the wavering, the troubled or the discouraged.",

    7: "Others in the church have noted that I was able to see through phoniness before it was "
    + "evident to other people." ,

    8: "I find I manage money well in order to give liberally to the Lord’s work." ,

    9: "I have assisted Christian leaders to relieve them for their essential job." ,

    10: "I have a desire to work with those who have physical or mental problems, "
    + "to alleviate their suffering.",

    11: "I feel comfortable relating to ethnics and minorities, and they seem to accept me." ,

    12: "I have led others to a decision for salvation through faith in Christ." ,

    13: "My home is always open to people passing through who need a place to stay." ,

    14: "When in a group, I am often the one others often look to for vision and direction." ,

    15: "When I speak people seem to listen and agree." ,

    16: "When a group I am in is lacking organization, I tend to step in and fill the gap." ,

    17: "Others can point to specific instances where my prayers have resulted in visible miracles." ,

    18: "In the name of the Lord, I have been used in curing diseases instantaneously." ,
    
    19: "I have spoken in tongues." ,

    20: "Sometimes when a person speaks in tongues, I get an idea about what God is saying." ,

    21: "I could live more comfortably, but I choose not to in order to live with the poor." ,

    22: "I am single and I enjoy it." ,

    23: "I spend at least an hour a day in prayer." ,

    24: "I have spoken to evil spirits and they have obeyed me." ,

    25: "I enjoy being called upon to do special jobs around the church." ,
    
    26: "Through God I have revealed specific things which will happen in the future." ,

    27: "I have enjoyed assuming the responsibility for the spiritual well being of a, "
    + "particular group of Christians." ,

    28: "I feel I can explain the New Testament teaching about the health and, "
    + "ministry of the body of Christ in a relevant way." ,

    29: "I can intuitively arrive at solutions to fairly complicated problems." ,

    30: "I have had insights of spiritual truth which others have said helped, "
    + "bring them closer to God." ,

    31: "I can effectively motivate people to get involved in ministry when it’s needed." ,

    32: "I can “see” the Spirit of God resting on certain people from time to time." ,

    33: "My giving records show that I give considerably more than 10 percent of, "
    + "my income to the Lord’s work." ,

    34: "Other people have told me that I helped them become more effective in, "
    + "their ministries." ,

    35: "I have cared for others when they have had material of physical needs." ,

    36: "I feel I could learn another language well in order to minister to those, "
    + " in a different culture.",

    37: "I have shared joyfully how Christ has brought me to Himself in a way that, "
    + "is meaningful to non-believers." ,

    38: "I enjoy taking charge of church suppers or social gatherings." ,

    39: "I have believed God for the impossible and have seen it happen in a tangible way." ,

    40: "Other Christians have followed my leadership because they believed in me." ,

    41: "I enjoy the details of organizing ideas, people, resources and time for more, "
    + "effective ministry." ,

    42: "God has used me personally to perform supernatural signs and wonders." ,
   
    43: "I enjoy praying for sick people because I know that many of them will be, "
    + "healed as a result." ,

    44: "I have spoken an immediate message of God to His people in a language that, "
    + "I have never learned." ,

    45: "I have interpreted tongues with the result that the body of Christ was edified, "
    + "exhorted, or comforted." ,

    46: "Living a simple lifestyle is an exciting challenge for me." ,

    47: "Other people have noted that I feel more indifferent about not being, "
    + "married than most." ,

    48: "When I hear a prayer request, I pray for that need for several days at least." ,

    49: "I have actually heard a demon speak in a loud voice." ,

    50: "I don’t have many special skills, but I do what needs to be done around the church." ,

    51: "People have told me that I have communicated timely and urgent messages which, "
    + "have come directly from the Lord." ,

    52: "I feel unafraid of giving spiritual guidance and direction in a group of Christians." ,

    53: "I can devote considerable time to learning new biblical truths in order to, "
    + "communicate them to others." ,

    54: "When a person has a problem I can frequently guide them to the best Biblical solution." ,

    55: "Through study or experience I have discerned major strategies or techniques, "
    + "God seems to use in furthering His kingdom." ,

    56: "People come to me in their afflictions or suffering, and have told me that, "
    + "they have been helped, relieved and healed." ,

    57: "I can tell with a fairly high degree of assurance when a person is afflicted, "
    + "by an evil spirit." ,

    58: "When I am moved by an appeal to give to God’s work, I usually find the money, "
    + "that I need to do it." ,

    59: "I have enjoyed doing routine tasks that led to more effective ministry by others." ,

    60: "I enjoy visiting in hospitals and/or retirement homes, and feel I do well in, "
    + "such a ministry." ,

    61: "People in a different race or culture have been attracted to me, and we have, "
    + "related well." ,

    62: "Non-Christians have noted that they feel comfortable when they are around me, "
    + "and that I have a positive effect on them toward developing a faith in Christ." ,

    63: "When people come to our home, they indicate that they “feel at home” with us." ,

    64: "Other people have told me that I had faith to accomplish what seemed impossible, "
    + "to them." ,

    65: "When I set goals, others seem to accept them readily." ,

    66: "I have been able to make effective and efficient plans for accomplishing the, "
    + "goals of a group." ,

    67: "God regularly seems to do impossible things through my life." ,

    68: "Others have told me that God healed them of an emotional problem when I, "
    + "ministered to them." ,

    69: "I can speak to God in a language I have never learned." ,

    70: "I have prayed that I may interpret if someone begins speaking in tongues." ,

    71: "I am not poor but I can identify with poor people." ,

    72: "I am glad I have more time to serve the Lord because I am single." ,

    73: "Intercessory prayer is one of my favorite ways of spending time." ,

    74: "Others call on me when they suspect that someone is demonized." ,

    75: "Others have mentioned that I seem to enjoy routine tasks and do well at them." ,

    76: "I sometimes have a strong sense of what God wants to say to people in response, "
    + "to a particular situation." ,

    77: "I have helped fellow believers by guiding them to relevant portions of the, "
    + "Bible and praying with them." ,

    78: "I feel I can communicate Biblical truths to others and see resulting changes, "
    + "in knowledge, attitudes, values, or conduct." ,

    79: "Some people indicate that I have perceived and applied Biblical truth to, "
    + "the specified needs of fellow believers." ,

    80: "I study and read quite a bit in order to learn new Biblical truths." ,

    81: "I have a desire to effectively counsel the perplexed, the guilty or the addicted." ,

    82: "I can recognize whether a person’s teaching is from God, from Satan, or of, "
    + "human origin." ,

    83: "I am so confident that God will meet my needs that I give to Him sacrificially, "
    + "and consistently." ,

    84: "When I do things behind the scenes and others are helped, I am joyful." ,

    85: "People call on me to help those who are less fortunate." ,

    86: "I would be willing to leave comfortable surroundings if it would enable me to share, "
    + "Christ with more people." ,

    87: "I get frustrated when others don’t seem to share their faith with unbelievers as, "
    + "much as I do." ,

    88: "Others have mentioned to me that I am a very hospitable person." ,

    89: "There have been times when I have felt sure I knew God’s specific will for the, "
    + "future growth of His work, even when others did not been so sure." ,

    90: "When I join a group, others seem to back off and expect me to take the leadership." ,

    91: "I am able to give directions to others without using persuasion to get them to, "
    + "accomplish a task." ,

    92: "People have told me that I was God’s instrument which brought supernatural, "
    + "changes in lives or circumstances." ,

    93: "I have prayed for others and physical healing has actually occurred." ,

    94: "When I give a public message in tongues, I expect it to be interpreted." ,

    95: "I have interpreted tongues in a way that seemed to bless others." ,
    
    96: "Others tell me I sacrifice much materially in order to minister." ,

    97: "I am single and I have little difficulty controlling my sexual desires." ,

    98: "Others have told me that my prayers for them have been answered in tangible ways." ,

    99: "Other people have been instantly delivered from demonic oppression when I have prayed." ,

    100: "I prefer being active and doing something rather than just sitting around, "
    + "talking or reading or listening to a speaker." ,

    101: "I sometimes feel that I know exactly what God wants me to do in ministry at, "
    + "a specific point in time." ,

    102: "People have told me that I have helped them to be restored to the, "
    + "Christian community." ,

    103: "Studying the Bible and sharing my insights with others is very satisfying for me." ,

    104: "I have felt an unusual presence of God and personal confidence when important, "
    + "decisions needed to be made." ,

    105: "I have the ability to discover new truths for myself through reading or, "
    + "observing situations firsthand." ,

    106: "I have urged others to seek a Biblical solution to their affliction or suffering., ",

    107: "I can tell whether a person speaking in tongues is genuine." ,

    108: "I have been willing to maintain a lower standard of living in order to benefit, "
    + "God’s work." ,

    109: "When I serve the Lord, I really don’t care who gets the credit." ,

    110: "I would enjoy spending time with a lonely, shut-in person or someone in prison." ,

    111: "More than most, I have had a strong desire to see people of others countries, "
    + "won to the Lord." ,

    112: "I am attracted to non-believers because of my desire to win them to Christ." ,

    113: "I have desired to make my home available to those in the Lord’s service, "
    + "whenever needed." ,

    114: "Others have told me that I am a person of unusual vision and I agree." ,

    115: "When I am in charge, things seem to run smoothly." ,

    116: "I have enjoyed bearing the responsibility for the success of a particular, "
    + "task within my church." ,

    117: "In the name of the Lord, I have been able to recover sight to the blind." ,

    118: "When I pray for the sick, either I or they feel sensations of tingling or warmth." ,

    119: "When I speak in tongues, I believe it is edifying to the Lord’s body." ,

    120: "I have interpreted tongues in such a way that the message appeared to be,  "
    + "directly from God." ,

    121: "Poor people accept me because I choose to live on their level." ,

    122: "I readily identify with Paul’s desire for others to be single as he was." ,

    123: "When I pray, God frequently speaks to me, and I recognize His voice." ,

    124: "I cast out demons in Jesus’ name." ,

    125: "I respond cheerfully when asked to do a job, even if it seems menial." ,
}
var i = 1;
var x = 0;
var giftings= {
    Prophecy: 0, 
    Pastor: 0, 
    Teaching: 0, 
    Wisdom: 0, 
    Knowledge: 0, 
    Exhortation: 0, 
    Discerning_of_Spirits: 0, 
    Giving: 0,
    Helps: 0, 
    Mercy: 0, 
    Missionary: 0, 
    Evangelist: 0, 
    Hospitality: 0, 
    Faith: 0, 
    Leadership: 0, 
    Administration: 0, 
    Miracles: 0,
    Healing: 0, 
    Tongues: 0, 
    Interpretation: 0, 
    Voluntary_Poverty: 0, 
    Celibacy: 0, 
    Intercession: 0, 
    Deliverance: 0, 
    Service: 0};

// var quiz= (function() {
    function reveal() {
    document.getElementById('intro_page').style.display="none";
    document.getElementById('quiz_page').style.display="inline";
    return false;
}

    
    function populate_question() {
        document.getElementById('id_num').innerHTML = "Question "+i+":";
        document.getElementById('question').innerHTML = questions[i];
        document.getElementById('selected_answer').innerHTML = "";
        i += 1;
        track_score();
        document.getElementById('selected_answer').style.display="none";
        console.log(i);
        console.log(x);
        console.log(giftings.Prophecy);
        console.log(giftings.Pastor);
    }

    function much_selected() {
        x = 3;
        document.getElementById('selected_answer').innerHTML = "Much";
        document.getElementById('selected_answer').style.display="grid";
    }
    function some_selected() {
        x = 2;
        document.getElementById('selected_answer').innerHTML = "Some";
        document.getElementById('selected_answer').style.display="grid";
    }
    function little_selected() {
        x = 1;
        document.getElementById('selected_answer').innerHTML = "Little";
        document.getElementById('selected_answer').style.display="grid";
    }
    function not_selected() {
        x = 0;
        document.getElementById('selected_answer').innerHTML = "Not At All";
        document.getElementById('selected_answer').style.display="grid";
    }

    function track_score() {
        y = i-2;
        if (y == 0){
            return true;
        }
        if (y == 1 || y == 26 || y == 51 || y == 76 || y == 101) {
            giftings.Prophecy += x;
        } else if (y == 2|| y == 27|| y == 52|| y == 77|| y == 102){
            giftings.Pastor += x;
        } else if (y == 3|| y == 28|| y == 53|| y == 78|| y == 103){
            giftings.Teaching += x;
        } else if (y == 4|| y == 29|| y == 54|| y == 79|| y == 104){
            giftings.Wisdom+= x;
        } else if (y == 5|| y == 30|| y == 55|| y == 80|| y == 105){
            giftings.Knowledge+= x;
        } else if (y == 6|| y == 31|| y == 56|| y == 81|| y == 106){
            giftings.Exhortation+= x;
        } else if (y == 7|| y == 32|| y == 57|| y == 82|| y == 107){
            giftings.Discerning_of_Spirits+= x;
        } else if (y == 8|| y == 33|| y == 58|| y == 83|| y == 108){
            giftings.Giving+= x;
        } else if (y == 9|| y == 34|| y == 59|| y == 84|| y == 109){
            giftings.Helps+= x;
        } else if (y == 10|| y == 35|| y == 60|| y == 85|| y == 110){
            giftings.Mercy+= x;
        } else if (y == 11|| y == 36|| y == 61|| y == 86|| y == 111){
            giftings.Missionary+= x;
        } else if (y == 12|| y == 37|| y == 62|| y == 87|| y == 112){
            giftings.Evangelist+= x;
        } else if (y == 13|| y == 38|| y == 63|| y == 88|| y == 113){
            giftings.Hospitality+= x;
        } else if (y == 14|| y == 39|| y == 64|| y == 89|| y == 114){
            giftings.Faith+= x;
        } else if (y == 15|| y == 40|| y == 65|| y == 90|| y == 115){
            giftings.Leadership+= x;
        } else if (y == 16|| y == 41|| y == 66|| y == 91|| y == 116){
            giftings.Administration+= x;
        } else if (y == 17|| y == 42|| y == 67|| y == 92|| y == 117){
            giftings.Miracles+= x;
        } else if (y == 18|| y == 43|| y == 68|| y == 93|| y == 118){
            giftings.Healing+= x;
        } else if (y == 19|| y == 44|| y == 69|| y == 94|| y == 119){
            giftings.Tongues+= x;
        } else if (y == 20|| y == 45|| y == 70|| y == 95|| y == 120){
            giftings.Interpretation+= x;
        } else if (y == 21|| y == 46|| y == 71|| y == 96|| y == 121){
            giftings.Voluntary_Poverty+= x;
        } else if (y == 22|| y == 47|| y == 72|| y == 97|| y == 122){
            giftings.Celibacy+= x;
        } else if (y == 23|| y == 48|| y == 73|| y == 98|| y == 123){
            giftings.Intercession+= x;
        } else if (y == 24|| y == 49|| y == 74|| y == 99|| y == 124){
            giftings.Deliverance+= x;
        } else if (y == 25|| y == 50|| y == 75|| y == 100|| y == 125){
            giftings.Service+= x;
        } else if (y == 126) {
            display_score();
        } else {
            err = "Error in adding score, unknown value.";
            console.log(err);
        }
    }

    function display_score() {
        document.getElementById('quiz_page').style.display="none";
        document.getElementById('score_page').style.display="inline";
        //var barColors = ["red", "green","blue","orange","brown"];
        var output= "";

        new Chart("GiftsChart", {
        type: "bar",
        data: {
            labels: Object.keys(giftings),
            datasets: [{
            backgroundColor: "blue",
            data: Object.values(giftings)
            }]
        },
        options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Spiritual Giftings"}
            }
        });

        for (const key in giftings) {
            output += "<p>";
        output += `${key}: ${giftings[key]}`;
        output += "</p>";
        }
        document.getElementById("list_gifts").innerHTML = output;

        get_dom(giftings);

        get_sub(giftings);
        
    }

    function get_dom(obj, num=3) {
        var output= "";
        const dom_obj = {};

        Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
        {
           if(ind < num){
              dom_obj[key] = obj[key];
           }
        });
        for (const key in dom_obj) {
            output += "<li>";
            output += `${key}: ${dom_obj[key]}`;
            output += "</li>";
        }
        document.getElementById("dom_list").innerHTML = output;
    }

    function get_sub(obj, num=6) {
        var output= "";
        const sub_obj = {};

        Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
        {
           if(2 < ind && ind < num){
              sub_obj[key] = obj[key];
           }
        });
        for (const key in sub_obj) {
            output += "<li>";
            output += `${key}: ${sub_obj[key]}`;
            output += "</li>";
        }
        document.getElementById("sub_list").innerHTML = output;
    }

// })

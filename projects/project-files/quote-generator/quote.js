const quotes = [
    "When you have a dream, you've got to grab it and never let go.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you're the pilot.",
    "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You define your own life. Don't let other people write your script.",
    "You are never too old to set another goal or to dream a new dream.",
    "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
    "Spread love everywhere you go.",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    "You can be everything. You can be the infinite amount of things that people are.",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "No matter what people tell you, words and ideas can change the world.",
    "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
    "It is during our darkest moments that we must focus to see the light.",
    "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    "Believe you can and you're halfway there.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "Try to be a rainbow in someone's cloud.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "Wake up determined, go to bed satisfied.",
    "Nobody built like you, you design yourself.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "If you don't like the road you're walking, start paving another one!",
    "We generate fears while we sit. We overcome them by action.",
    "We are not our best intentions. We are what we do.",
    "You are never too old to set another goal or to dream a new dream.",
    "You have to be where you are to get where you need to go."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break;
    }
}
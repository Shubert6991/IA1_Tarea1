/* Shubert Alexander Alonzo Agustin
 * 201503971
 * IA 1
 */

let posibleStates = [
    ['A', 'CLEAN', 'CLEAN'],
    ['A', 'CLEAN', 'DIRTY'],
    ['A', 'DIRTY', 'CLEAN'],
    ['A', 'DIRTY', 'DIRTY'],
    ['B', 'CLEAN', 'CLEAN'],
    ['B', 'CLEAN', 'DIRTY'],
    ['B', 'DIRTY', 'CLEAN'],
    ['B', 'DIRTY', 'DIRTY'],
]

function reflexAgent(location, state){
   	if (state==="DIRTY") return "CLEAN";
   	else if (location==="A") return "RIGHT";
   	else if (location==="B") return "LEFT";
}

function test(states){
    if(posibleStates.length <= 0) return;

    document.getElementById("log").innerHTML+=`<br/>States Left: ${posibleStates.map((state) => `<br/>[${state[0]}, ${state[1]}, ${state[2]}]`)}<br/>`;

    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflexAgent(location, state);

    document.getElementById("log").innerHTML+=`<br/> Location: ${location} | Action: ${action_result} | Current State => [${location}, ${states[1]}, ${states[2]}]`;

    let currentState = [location, states[1], states[2]]
    posibleStates = posibleStates.filter((state) => {
        return !((state.length === currentState.length) &&
                state.every((v,i) => currentState[i] === v))
    })

    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";

    let random = Math.floor(Math.random() * 2)
    if(states[1] === 'CLEAN')
        random === 0 ? states[1] = states[1] : states[1] = "DIRTY";
    if(states[2] === 'CLEAN')
        random === 0 ? states[2] = states[2] : states[2] = "DIRTY";
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);

let workoutTemplate = {
    "name": null,
    'time': null
}

let routineTemplate = {
    "name": null,
    "workouts": [],
    "repetitions": 0,
    "pauseTime": 0,
    "preparation": 0

}

if(localStorage.getItem('routine-app') == null){
    localStorage.setItem('routine-app', `{"routines": null}`);
}else{
    console.log(localStorage.getItem('routine-app'));
    console.log(JSON.parse(localStorage.getItem('routine-app')));
    localStorage.clear();
}
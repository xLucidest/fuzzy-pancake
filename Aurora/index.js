function hello() {
    let surp = document.getElementById("surp");
    let hola = document.getElementById("hi");
    let bon = document.getElementById("bonjour");

    let id = setInterval(change, 5);
    let opac = 0;
    let ropac = 1;
    let opac2 = 0;
    function change() {
        if (opac >= 1)
            clearInterval(id);
        else {
            if (opac < 1)
                opac += .012;
                surp.style.opacity = opac;

            if (ropac >= 0.04) {
                ropac -= .04;
                hola.style.opacity = ropac;
            }
            else {
                hola.style.opacity = 0;
                opac2 += .02;
                bon.style.opacity = opac2;
            }
        }
    }
    return true;
}

function a1() {
    let img = document.getElementById("a1");
    img.style.display = "block";
    let num = 0;

    // let pick1 = Math.random();
    // // img.src=images1[0];
    // if (pick1 < .12) {
    //     num = Math.floor(Math.random() * images2.length);
    //     img.src = images2[num];
    // }
    // else {
    num = Math.floor(Math.random() * images1.length);
    img.src = images1[num];
    // }
}

const images1 = [
    "https://cdn.discordapp.com/attachments/1006325647901208616/1447419203052245124/image.png?ex=693987ed&is=6938366d&hm=d36ae618998457fb2e503fee06293b028e57895269d52b6bb22fb5d60f6961b1&",
    "https://cdn.discordapp.com/attachments/1006325647901208616/1445986519331639366/image.png?ex=693997a3&is=69384623&hm=5cf890d37033c58e58ef2184fa5d60877cd749278076d71b9633ca9208c6c041&",
    "https://cdn.discordapp.com/attachments/1006325647901208616/1445986236853649552/image.png?ex=6939975f&is=693845df&hm=afcffb6d8636114f2a54098483e9581e66a2203f07b9b5cc24fbb0581706cd6e&",
    "https://cdn.discordapp.com/attachments/1006325647901208616/1447255708197195866/image.png?ex=69399869&is=693846e9&hm=5689b68211cf3a5a58ce6d47e25c2a9a2756dd79feb13e76ae83b706e21f4b0f&",
    "https://cdn.discordapp.com/attachments/782011698101354517/1448009796757360740/image.jpg?ex=6939b3b6&is=69386236&hm=16c23b5c967540cb02cb87640576a5b398d3bdd347ac698ddfdb98dd4e2a8188&",
    "https://cdn.discordapp.com/attachments/782011698101354517/1448009797055021066/image.jpg?ex=6939b3b6&is=69386236&hm=52aefff49618f10dc3857a3d6263edf2ef4f7fb0d4b4d9207ae6a5c5ffd8ed61&",
    "https://cdn.discordapp.com/attachments/782011698101354517/1448009797415735430/image.jpg?ex=6939b3b6&is=69386236&hm=733b56f146f6aeb003e329f2b2cfbed143501b5f79225d78c899586f6993562e&",
    "https://cdn.discordapp.com/attachments/782011698101354517/1448009798015516692/image.jpg?ex=6939b3b6&is=69386236&hm=c5551e43defa3e5f6db740a12b39ad5658772873ff415a69af9adfcb3fcafc83&",

]

// const images2 = [
//     "https://cdn.discordapp.com/attachments/782347772854534154/826487903571935262/unknown.png?ex=66423ad7&is=6640e957&hm=87a3d8a41e7e0fc3764503ee6c470f4478092866602ba0d7e2b75d081b9b4339&",
//     "https://cdn.discordapp.com/attachments/782347772854534154/826489193521610862/unknown.png?ex=66423c0b&is=6640ea8b&hm=d6004fd766273c0fec87696725670c3ed9e1b1effd62c8daf8ffb60c21a5cd5b&",
//     "https://cdn.discordapp.com/attachments/782347772854534154/826489892736860260/unknown.png?ex=66423cb1&is=6640eb31&hm=2afb9a17329acb2289f5a1107b4bba590f9f803e0c6b4721adc816ad80ad5ccd&",
// ]

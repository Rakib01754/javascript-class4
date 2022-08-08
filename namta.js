function namtaOfthirteen(pernumber) {
    let namtabox = [];
    for (i = 1; i <= 10; i++) {
        multiply = pernumber * i;
        namtabox.push(pernumber + 'x' + i + '=' + multiply);

    }
    return namtabox;


}
givenNumber = namtaOfthirteen(13);
console.log(givenNumber);


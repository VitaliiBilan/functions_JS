var age = prompt("Який ваш вік?");

if (age > 7 && age < 17 ) {
    var name = prompt("Яке ваше ім'я?");

    if (name && name != "null") {
        document.write("Доброго дня, " + name);
    } else {
        document.write("До побачення");
    }
} else {
    document.write("Ви народилися не в 2000х");
}
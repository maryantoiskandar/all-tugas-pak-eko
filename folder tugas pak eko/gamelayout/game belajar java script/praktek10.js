    //belajar1
    let umur = 17;

    if(umur < 17) {
        console.log("belum bisa mengendarai motor");
    } 

    else if(umur >= 17) {
        console.log("boleh mengendarai motor");
    }

    //belajar2
    let nilai = 85;
    let grade

    if (nilai >= 90 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 80 && nilai <= 89) {
        grade = "B";
    } else if (nilai >= 70 && nilai <= 79) {
        grade = "C";
    } else {
        grade = "D";
    }

    console.log("Nilai Anda: " + grade);

    //belajar3

    let bahasa = "ar";

    switch (bahasa) {
        case "id":
            console.log("Halo");
            break;
        case "en":
            console.log("Hello");
            break;
        case "ar":
            console.log("Marhaban");
            break;
        default:
            console.log("Bahasa tidak dikenali");
    }
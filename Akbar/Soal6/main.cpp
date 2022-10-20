#include <iostream>
#include <conio.h>
#include <string>
#include<limits>
#include<ios>

using namespace std;

main()
{

    int totalJarak = 0;
    int jarakAli = 0, jarakBadu = 0;
    double kecepatanAwalAli = 0, kecepatanBadu = 0;
    double pertamabahanKecepatanAli = 0;
    int detikBerangkat = 0;

    cout << "Input Jarak " << endl;
    cin >> totalJarak;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Kecepatan Awal Ali " << endl;
    cin >> kecepatanAwalAli;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Pertambahan Kecepatan Ali (Tiap 10 Detik) " << endl;
    cin >> pertamabahanKecepatanAli;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Berapa Detik Sebelumnya Badu Berangkat " << endl;
    cin >> detikBerangkat;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Kecepatan Badu " << endl;
    cin >> kecepatanBadu;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');

    int timeSpan = 0;
    jarakBadu = kecepatanBadu * detikBerangkat;
    int x = 0;
    while (jarakAli < totalJarak) {
        if (timeSpan != x / 10) {
            kecepatanAwalAli += pertamabahanKecepatanAli;
        }
        jarakAli += kecepatanAwalAli;
        jarakBadu += kecepatanBadu;
        timeSpan = x / 10;
        x++;
        if (jarakAli >= (totalJarak - jarakBadu)) {
            break;
        }
    }

    cout << endl;
    cout << "Detik Setelah pukul 08:00:00 dimana Ali dan Badu Berpapasan DiJalan : " + std::to_string(x) << endl;
    cout << "Jarak yang telah Ditempuh Ali Sampai Berpapasan : " + std::to_string(jarakAli) << endl;

    return 0;
}

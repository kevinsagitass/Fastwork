#include <iostream>
#include <conio.h>
#include <string>
#include<limits>
#include<ios>

using namespace std;

main()
{

    int totalJarak = 0;
    double jarakAli = 0, jarakBadu = 0;
    double kecepatanAwalAli = 0, kecepatanBadu = 0;
    int detikBerangkat = 0;

    cout << "Input Jarak " << endl;
    cin >> totalJarak;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Kecepatan Awal Ali " << endl;
    cin >> kecepatanAwalAli;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Berapa Detik Setelah Ali Badu Berangkat " << endl;
    cin >> detikBerangkat;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Kecepatan Badu " << endl;
    cin >> kecepatanBadu;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');

    int x = 0;
    // Perjalanan Awal Berangkat
    while (jarakAli < totalJarak * 2) {
        if (x != 0) {
            kecepatanAwalAli += 0.1;
        }
        jarakAli += kecepatanAwalAli;
        if (x >= detikBerangkat) {
            // Badu Berangkat
            jarakBadu += kecepatanBadu;
        }
        x++;
        if (jarakAli > totalJarak && (jarakAli - totalJarak + jarakBadu) >= totalJarak) {
            break;
        }
    }

    cout << endl;
    cout << "Detik Setelah Badu berangkat dan Berpapasan di Jalan yaitu : " + std::to_string(x - detikBerangkat) << endl;

    return 0;
}

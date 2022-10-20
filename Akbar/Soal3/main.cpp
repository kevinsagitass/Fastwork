#include <iostream>
#include <string>
#include <cstring>
#include<limits>
#include<ios>

using namespace std;

int main()
{
    double jarakJalan = 0;
    string pukulBerangkat1, pukulBerangkat2;
    double kecepatan1 = 0, kecepatan2 = 0;
    int pukulBerangkat1DalamDetik = 0, pukulBerangkat2DalamDetik = 0;

    cout << "Input Jarak Jalan (Meter)" << endl;
    cin >> jarakJalan;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Pukul Keberangkatan Orang Pertama HH:mm:ss" << endl;
    std::getline(std::cin, pukulBerangkat1);
    cout << "Input Kecepatan Rata Rata Orang Pertama (Meter per Detik)" << endl;
    cin >> kecepatan1;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Pukul Keberangkatan Orang Kedua HH:mm:ss" << endl;
    std::getline(std::cin, pukulBerangkat2);
    cout << "Input Kecepatan Rata Rata Orang Kedua (Meter per Detik)" << endl;
    cin >> kecepatan2;

    // Jam Berangkat
    pukulBerangkat1DalamDetik += std::stoi(pukulBerangkat1.substr(0, pukulBerangkat1.find(":"))) * 3600;
    pukulBerangkat1.erase(0, pukulBerangkat1.find(":") + 1);
    // Menit Berangkat
    pukulBerangkat1DalamDetik += std::stoi(pukulBerangkat1.substr(0, pukulBerangkat1.find(":"))) * 60;
    pukulBerangkat1.erase(0, pukulBerangkat1.find(":") + 1);
    // Detik Berangkat
    pukulBerangkat1DalamDetik += std::stoi(pukulBerangkat1.substr(0, pukulBerangkat1.find(":")));
    pukulBerangkat1.erase(0, pukulBerangkat1.find(":") + 1);

    // Jam Berangkat
    pukulBerangkat2DalamDetik += std::stoi(pukulBerangkat2.substr(0, pukulBerangkat2.find(":"))) * 3600;
    pukulBerangkat2.erase(0, pukulBerangkat2.find(":") + 1);
    // Menit Berangkat
    pukulBerangkat2DalamDetik += std::stoi(pukulBerangkat2.substr(0, pukulBerangkat2.find(":"))) * 60;
    pukulBerangkat2.erase(0, pukulBerangkat2.find(":") + 1);
    // Detik Berangkat
    pukulBerangkat2DalamDetik += std::stoi(pukulBerangkat2.substr(0, pukulBerangkat2.find(":")));
    pukulBerangkat2.erase(0, pukulBerangkat2.find(":") + 1);

    int selisihWaktu = abs(pukulBerangkat2DalamDetik - pukulBerangkat1DalamDetik);

    double jarakDitempuh = 0;
    if (selisihWaktu != 0) {
        // Ada Selisih Jam Keberangkatan Hitung beda Jarak Dahulu
        if (pukulBerangkat1DalamDetik < pukulBerangkat2DalamDetik) {
            // Orang pertama Berangkat Lebih Awal
            jarakDitempuh = kecepatan1 * selisihWaktu;
        } else {
            // Orang kedua Berangkat Lebih Awal
            jarakDitempuh = kecepatan2 * selisihWaktu;
        }
    }

    // Waktu ketemu dalam Detik
    int waktuBerpapasan = (jarakJalan - jarakDitempuh) / (kecepatan1 + kecepatan2);
    int jam, menit, detik;

    if (pukulBerangkat1DalamDetik < pukulBerangkat2DalamDetik) {
        waktuBerpapasan += pukulBerangkat1DalamDetik;
    } else {
        waktuBerpapasan += pukulBerangkat2DalamDetik;
    }

    jam = waktuBerpapasan / 3600;
    waktuBerpapasan %= 3600;
    menit = waktuBerpapasan / 60;
    waktuBerpapasan %= 60;
    detik = waktuBerpapasan;
    cout << "Mereka akan Bertemu Pada Pukul " + std::to_string(jam) + ":" + std::to_string(menit) + ":" + std::to_string(detik) << endl;

    return 0;
}

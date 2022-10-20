#include <iostream>
#include <string>
#include <cstring>

using namespace std;

int main()
{
    string pukulBerangkat, pukulTiba;
    int pukulBerangkatdalamDetik = 0, pukulTibaDalamDetik = 0;
    cout << "Input Pukul Keberangkatan HH:mm:ss" << endl;
    std::getline(std::cin, pukulBerangkat);
    cout << "Input Pukul Tiba HH:mm:ss " << endl;
    std::getline(std::cin, pukulTiba);

    // Jam Berangkat
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":"))) * 3600;
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);
    // Menit Berangkat
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":"))) * 60;
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);
    // Detik Berangkat
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":")));
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);

    // Jam Tiba
    pukulTibaDalamDetik += std::stoi(pukulTiba.substr(0, pukulTiba.find(":"))) * 3600;
    pukulTiba.erase(0, pukulTiba.find(":") + 1);
    // Menit Tiba
    pukulTibaDalamDetik += std::stoi(pukulTiba.substr(0, pukulTiba.find(":"))) * 60;
    pukulTiba.erase(0, pukulTiba.find(":") + 1);
    // Detik Tiba
    pukulTibaDalamDetik += std::stoi(pukulTiba.substr(0, pukulTiba.find(":")));
    pukulTiba.erase(0, pukulTiba.find(":") + 1);

    int selisihWaktu = pukulTibaDalamDetik - pukulBerangkatdalamDetik;

    int jamPerjalanan, menitPerjalanan, detikPerjalanan;

    jamPerjalanan = selisihWaktu / 3600;
    selisihWaktu = selisihWaktu % 3600;
    menitPerjalanan = selisihWaktu / 60;
    selisihWaktu = selisihWaktu % 60;
    detikPerjalanan = selisihWaktu;

    cout << "Waktu Perjalanan yang Ditempuh " + std::to_string(jamPerjalanan) + ":" + std::to_string(menitPerjalanan) + ":" + std::to_string(detikPerjalanan) << endl;
    return 0;
}

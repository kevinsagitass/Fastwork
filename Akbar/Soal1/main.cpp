#include <iostream>
#include <string>
#include <cstring>

using namespace std;

int main()
{
    string pukulBerangkat;
    int pukulBerangkatdalamDetik = 0, detikPerjalanan = 0;
    cout << "Input Pukul Keberangkatan HH:mm:ss" << endl;
    std::getline(std::cin, pukulBerangkat);
    cout << "Input Waktu Perjalanan (Dalam Detik) : " << endl;
    cin >> detikPerjalanan;

    // Jam
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":"))) * 3600;
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);
    // Menit
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":"))) * 60;
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);
    // Detik
    pukulBerangkatdalamDetik += std::stoi(pukulBerangkat.substr(0, pukulBerangkat.find(":")));
    pukulBerangkat.erase(0, pukulBerangkat.find(":") + 1);

    pukulBerangkatdalamDetik += detikPerjalanan;

    int jam, menit, detik;

    jam = pukulBerangkatdalamDetik / 3600;
    pukulBerangkatdalamDetik = pukulBerangkatdalamDetik % 3600;
    menit = pukulBerangkatdalamDetik / 60;
    pukulBerangkatdalamDetik = pukulBerangkatdalamDetik % 60;
    detik = pukulBerangkatdalamDetik;

    cout << "Waktu Setelah Sampai Tujuan " + std::to_string(jam) + ":" + std::to_string(menit) + ":" + std::to_string(detik) << endl;
    return 0;
}

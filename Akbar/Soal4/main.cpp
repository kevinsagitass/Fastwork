#include <iostream>
#include <string>

using namespace std;

int main()
{
    int nomor1, nomor2, nomor3, median = 0;
    cout << "Input Nomor 1" << endl;
    cin >> nomor1;
    median = nomor1;
    cout << "Input Nomor 2" << endl;
    cin >> nomor2;
    if (nomor2 > nomor1) {
        median = nomor2;
    }
    cout << "Input Nomor 3" << endl;
    cin >> nomor3;
    if (nomor3 < nomor2) {
        median = nomor3;
    }

    cout << "Nilai Tengah : " + std::to_string(median) << endl;



    return 0;
}

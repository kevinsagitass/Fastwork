#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main()
{
    int nomor[3] = {0};
    cout << "Input Nomor 1" << endl;
    cin >> nomor[0];
    cout << "Input Nomor 2" << endl;
    cin >> nomor[1];
    cout << "Input Nomor 3" << endl;
    cin >> nomor[2];

    sort(nomor, nomor + sizeof(nomor)/sizeof(nomor[0]));

    cout << "Nilai Tengah : " + std::to_string(nomor[1]) << endl;



    return 0;
}

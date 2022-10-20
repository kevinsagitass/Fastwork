#include <iostream>

using namespace std;

int main()
{
    int panjang1, panjang2, panjang3, counter = 0;
    cout << "Input Panjang 1" << endl;
    cin >> panjang1;
    cout << "Input Panjang 2" << endl;
    cin >> panjang2;
    if (panjang2 == panjang1) {
        counter++;
    }
    cout << "Input Panjang 3" << endl;
    cin >> panjang3;
    if (panjang3 == panjang2) {
        counter++;
    }
    if (panjang3 == panjang1) {
        counter++;
    }

    if (counter == 3) {
        cout << "SAMA SISI" << endl;
    } else if(counter == 1 || counter == 2) {
        cout << "SAMA KAKI" << endl;
    } else {
        cout << "SEMBARANG" << endl;
    }

    return 0;
}

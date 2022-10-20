#include <iostream>

using namespace std;

int main()
{
    int derajatJam = 30;
    int jamMulai = 0;

    for (int i = jamMulai; i <= 12; i++) {
        double menit = (2 * (i * derajatJam)) / 11;

        cout << i << ":" << menit << endl;
    }

    return 0;
}

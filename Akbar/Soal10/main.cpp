#include <iostream>
#include<limits>
#include<ios>
#include <bits/stdc++.h>

using namespace std;

bool kombinasiDitemukan = false;

void jumlahSubset(vector<int> bilangan, int nomorKombinasi, int total)
{
    int x[bilangan.size()];
    int j = bilangan.size() - 1;

    while (nomorKombinasi > 0)
    {
        x[j] = nomorKombinasi % 2;
        nomorKombinasi = nomorKombinasi / 2;
        j--;
    }

    int totalSubset = 0;

    for (int i = 0; i < bilangan.size(); i++)
        if (x[i] == 1)
            totalSubset = totalSubset + bilangan[i];

    if (totalSubset == total)
    {
        kombinasiDitemukan = true;
        for (int i = 0; i < bilangan.size(); i++)
            if (x[i] == 1)
                cout << bilangan[i] << " ";
        cout << endl;
    }
}

void printSubset(vector<int> bilangan, int total)
{
    int totalKombinasi = pow(2, bilangan.size());

    for (int i = 1; i < totalKombinasi; i++)
        jumlahSubset(bilangan, i, total);
}

int main()
{
    int bilangan[10] = {0}, total = 0;

    cout << "Masukan 10 Bilangan " << endl;
    for (int i = 0; i < 10; i++) {
        cin >> bilangan[i];
        cin.ignore(numeric_limits<streamsize>::max(),'\n');
    }
    cout << "Masukan Total " << endl;
    cin >> total;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');

    cout << endl;
    printSubset(std::vector<int>(bilangan, bilangan + sizeof bilangan / sizeof bilangan[0]), total);
    if (!kombinasiDitemukan) {
        cout << "TIDAK ADA" << endl;
    }

    return 0;
}

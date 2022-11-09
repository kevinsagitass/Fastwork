#include <iostream>

using namespace std;

int main()
{
    int i = 1, chk = 0, j;
    int count = 0, total = 0, average = 0;
    cout << "DERET BILANGAN PRIMA" << endl;
    while(count < 50)
    {
        for(j = 2; j < i; j++)
        {
           if(i % j == 0)
           {
               chk++;
               break;
           }
        }
        if  (chk == 0 && i != 1) {
            count++;
            total += i;
            cout << i;
            if (count != 50) {
                cout << ",";
            }
        }

        chk = 0;
        i++;
    }
    cout << endl;
    cout << endl << "TOTAL DERET PRIMA = " << total << endl;
    cout << "RATA2 DERET PRIMA = " << total / count << endl;
    return 0;
}

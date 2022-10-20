#include <iostream>
#include <string>
#include<limits>
#include<ios>

using namespace std;

class Robot {
    public:
        int kepala;
        int kaki;
};

int main()
{
    int totalRobot = 0, totalKepala = 0, totalKaki = 0, createdRobot = 0;
    int kepala = 0, kaki = 0;
    Robot robotA, robotB, robotC;

    cout << "Input Total Robot " << endl;
    cin >> totalRobot;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Total Kepala " << endl;
    cin >> totalKepala;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Total Kaki " << endl;
    cin >> totalKaki;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Jumlah Kepala Robot A " << endl;
    cin >> kepala;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Jumlah Kaki Robot A " << endl;
    cin >> kaki;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    robotA.kepala = kepala;
    robotA.kaki = kaki;
    cout << "Input Jumlah Kepala Robot B " << endl;
    cin >> kepala;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Jumlah Kaki Robot B " << endl;
    cin >> kaki;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    robotB.kepala = kepala;
    robotB.kaki = kaki;
    cout << "Input Jumlah Kepala Robot C " << endl;
    cin >> kepala;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    cout << "Input Jumlah Kaki Robot C " << endl;
    cin >> kaki;
    cin.ignore(numeric_limits<streamsize>::max(),'\n');
    robotC.kepala = kepala;
    robotC.kaki = kaki;

    int totalRobotCount[3] = {0};

    Robot robots[3] {robotA, robotB, robotC};

    bool isNewRobotGenerated = false;

    while(createdRobot < totalRobot) {
        isNewRobotGenerated = false;
        for (int i = 0; i < 3; i++) {
            if (totalKepala - robots[i].kepala > 0 && totalKaki - robots[i].kaki > 0) {
                totalKepala -= robots[i].kepala;
                totalKaki -= robots[i].kaki;
                createdRobot++;
                totalRobotCount[i]++;
                isNewRobotGenerated = true;
            }
        }
        if (!isNewRobotGenerated) {
            break;
        }
    }

    cout << "Total Robot A : " << totalRobotCount[0] << endl;
    cout << "Total Robot B : " << totalRobotCount[1] << endl;
    cout << "Total Robot C : " << totalRobotCount[2] << endl;

    return 0;
}



/* Replace "dll.h" with the name of your header */
#include "dll.h"
#include <windows.h>

DllClass::DllClass()
{

}

DllClass::~DllClass()
{

}

void MemWrite(DWORD dwAddress, void* pValue, int iSize)
{
    DWORD dwOldProtect;
    VirtualProtect((LPVOID)dwAddress, iSize, PAGE_EXECUTE_READWRITE, &dwOldProtect);
    memcpy((LPVOID)dwAddress, pValue, iSize);
    VirtualProtect((LPVOID)dwAddress, iSize, dwOldProtect, &dwOldProtect);
}

BOOL WINAPI DllMain(HINSTANCE hinstDLL,DWORD fdwReason,LPVOID lpvReserved)
{
	if (fdwReason == DLL_PROCESS_ATTACH)
    {
        DWORD dwAddress = 0x02D967F0;
        MemWrite(dwAddress, (void*)"\xFF\xFF\x00\x00", 4);
    }

    // DWORD dwAddress = 0x02D967F0;
    //     DWORD dwValue = 0x123456;
    //     MemWrite(dwAddress, (void*)&dwValue, 4);
	
	/* Return TRUE on success, FALSE on failure */
	return TRUE;
}

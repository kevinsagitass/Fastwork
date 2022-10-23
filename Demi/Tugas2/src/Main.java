import java.util.Scanner;

public class Main {

	String[][] book = new String[10][100];
	String[][] place = {{"Malang"}, {"Bandung"}, {"Surabaya"}};
	
	Scanner input = new Scanner(System.in);
	
	boolean cekDate(int date) {
		if (date < 2018 || date > 2022) {
			return false;
		}
		return true;
	}
	
	int cekFrom(String from) {
		for (int i = 0; i < place.length; i++) {
			if (from.compareTo(place[i][0]) == 0) {
				return i;
			}
		}
		
		return -1;
	}
	
	int cekName(String name) {
		for (int i = 0; book[i][0] != null; i++) {
			if (name.compareTo(book[i][0]) == 0) {
				return i;
			}
		}
		
		return -1;
	}
	
	void list() {
		for (int i = 0; i < book.length; i++) {
			System.out.println(book[i][0]);
		}
	}
	
	public Main() {
		book[0][0] = new String("This is Book, Malang. 2022");
		
		String inName, inFrom;
		int inIndex = 1, inDate;
		
		boolean inputValid = true;
		
		System.out.println("Welcome to Library");
		do {
			System.out.print("Nama : ");
			inName = input.nextLine();
			inputValid = cekName(inName) == -1;
			if (!inputValid) {
				System.out.println("Nama Sudah Ada");
			}
		} while (!inputValid);
		do {
			System.out.print("From : ");
			inFrom = input.nextLine();
			inputValid = cekFrom(inFrom) != -1;
			if (!inputValid) {
				System.out.println("Tempat Tidak Ada");
			}
		} while (!inputValid);
		do {
			System.out.print("Date : ");
			inDate = input.nextInt();
			inputValid = cekDate(inDate);
			if (!inputValid) {
				System.out.println("Tahun Buku Harus >= 2018 dan <= 2022");
			}
		} while (!inputValid);
		String name = inName + "" + inFrom + "" + inDate;
		book[inIndex][0] = new String(name);
		inIndex++;
		System.out.println("Buku berhasil ditambahkan");
	}

	public static void main(String[] args) {
		new Main();
	}

}

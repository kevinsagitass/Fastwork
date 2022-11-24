package main;

import java.util.Scanner;

import data.Database;
import entity.Gold;
import entity.Heroes;
import entity.Party;
import entity.Post;
import entity.Serenity;
import entity.Theme;
import entity.User;
import entity.VIP;

public class Main {

	Database db = Database.getInstance();
	Scanner scanner = new Scanner(System.in);

	User user;
	int choice = 0;
	boolean loggedIn = false;

	public Main() {
		do {
			clearScreen();
			if (!loggedIn) {
				printLoginMenu();
			} else {
				printMainMenu();
				clearScreen();
				switch (choice) {
				case 1:
					viewPosts();
					break;
				case 2:
					createPost();
					break;
				case 3:
					logout();
					break;
				}
			}
		} while (choice != 4);
		System.out.println("Thank You!");
	}

	public static void main(String[] args) {
		new Main();
	}

	private void printLoginMenu() {
		int userChoice = 0;
		String userType = "";
		do {
			System.out.println("You Are Currently Not Logged In Please Login!");
			System.out.println("1. Standard User");
			System.out.println("2. Gold User");
			System.out.println("3. VIP User");
			userChoice = scanner.nextInt();
			scanner.nextLine();
		} while (userChoice < 1 || userChoice > 3);
		if (userChoice == 1) {
			userType = "STANDARD";
		} else if (userChoice == 2) {
			userType = "GOLD";
		} else if (userChoice == 3) {
			userType = "VIP";
		}
		user = db.login(userType);
		if (user != null) {
			loggedIn = true;
			System.out.println("Successfuly Logged In!");
		} else {
			System.out.println("Credential Wrong!");
		}
		pause();
	}

	private void printMainMenu() {
		do {
			System.out.println("1. View Posts");
			System.out.println("2. Create Post");
			System.out.println("3. Logout");
			System.out.println("4. Exit");
			choice = scanner.nextInt();
			scanner.nextLine();
		} while (choice < 1 || choice > 4);
	}

	private void viewPosts() {
		db.posts.forEach(post -> {
			System.out.println("====================================================");
			System.out.println("Title : " + post.getTitle());
			System.out.println("Content : " + post.getContent());
			System.out.println("Picture : " + post.getPicture());
			System.out.println("Theme : " + post.getTheme().toString());
			System.out.println("====================================================");
			System.out.println("");
		});
		pause();
	}

	private void createPost() {
		String title = "", content = "", picture = "", theme = "";
		Theme chosenTheme = null;
		do {
			System.out.print("Please Enter Post Title : ");
			title = scanner.nextLine();
		} while (title.length() > 100);
		do {
			System.out.print("Please Enter Post Content [Maximum Character : " + user.getMaxCharacter() + "] : ");
			content = scanner.nextLine();
		} while (content.length() > user.getMaxCharacter());
		System.out.print("Please Enter Post Picture : ");
		picture = scanner.nextLine();
		do {
			System.out.print("Please Choose Post Theme [" + user.printAvailableTheme() + "] : ");
			theme = scanner.nextLine();
		} while (!validateTheme(theme));
		if (theme.equals("Serenity")) {
			chosenTheme = new Serenity();
		} else if (theme.equals("Party")) {
			chosenTheme = new Party();
		} else if (theme.equals("Heroes")) {
			chosenTheme = new Heroes();
		} else if (theme.equals("Gold")) {
			chosenTheme = new Gold();
		} else if (theme.equals("VIP")) {
			chosenTheme = new VIP();
		}
		db.addPost(Post.builder.newInstance().setTitle(title).setContent(content).setTheme(chosenTheme)
				.setPicture(picture).build());
		System.out.println("Post Created!");
		System.out.println("");
		pause();
	}

	private void logout() {
		System.out.println("You Are Successfully Logged Out!");
		user = null;
		loggedIn = false;
		pause();
	}

	private boolean validateTheme(String theme) {
		boolean valid = false;
		for (int x = 0; x < user.getThemes().size(); x++) {
			if (theme.equals(user.getThemes().get(x).getClass().getSimpleName())) {
				valid = true;
			}
		}

		return valid;
	}

	private void clearScreen() {
		for (int i = 0; i < 50; i++) {
			System.out.println("");
		}
	}

	private void pause() {
		System.out.println("Press Any Key to Continue");
		scanner.nextLine();
	}

}

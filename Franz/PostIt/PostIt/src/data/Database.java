package data;

import java.util.ArrayList;
import java.util.List;

import entity.GoldUser;
import entity.Post;
import entity.StandardUser;
import entity.User;
import entity.VIPUser;

public class Database {

	private static Database instance = null;

	public List<User> users;
	public List<Post> posts;

	@SuppressWarnings("serial")
	private Database() {
		this.users = new ArrayList<User>() {
			{
				add(new StandardUser());
				add(new GoldUser());
				add(new VIPUser());
			}
		};
		this.posts = new ArrayList<Post>();
	}

	public static Database getInstance() {
		if (instance == null)
			instance = new Database();

		return instance;
	}

	public User login(String type) {
		if (type.equalsIgnoreCase("STANDARD")) {
			return users.stream().filter(x -> x instanceof StandardUser).findFirst().get();
		} else if (type.equalsIgnoreCase("GOLD")) {
			return users.stream().filter(x -> x instanceof GoldUser).findFirst().get();
		} else if (type.equalsIgnoreCase("VIP")) {
			return users.stream().filter(x -> x instanceof VIPUser).findFirst().get();
		}

		return null;
	}
	
	public void addPost(Post newPost) {
		this.posts.add(newPost);
	}
}

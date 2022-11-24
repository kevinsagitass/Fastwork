package entity;

import java.util.ArrayList;
import java.util.List;

public abstract class User {
	
	protected String username;
	protected String password;
	protected int maxCharacter;
	
	@SuppressWarnings("serial")
	protected List<Theme> themes = new ArrayList<Theme>() {{
		add(new Serenity());
		add(new Party());
		add(new Heroes());
	}};

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getMaxCharacter() {
		return maxCharacter;
	}

	public void setMaxCharacter(int maxCharacter) {
		this.maxCharacter = maxCharacter;
	}

	public List<Theme> getThemes() {
		return themes;
	}

	public void setThemes(List<Theme> themes) {
		this.themes = themes;
	}
	
	public String printAvailableTheme() {
		String availableTheme = "";
		for (int x = 0; x < this.themes.size(); x++) {
			availableTheme += themes.get(x).getClass().getSimpleName();
			if (x != this.themes.size() - 1) {
				availableTheme += "|";
			}
		};
		
		return availableTheme;
	}
}

package entity;

public class GoldUser extends User{
	
	public GoldUser() {
		this.maxCharacter = 1000;
		this.themes.add(new Gold());
	}
}

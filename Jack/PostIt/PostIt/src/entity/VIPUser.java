package entity;

public class VIPUser extends User{
	
	public VIPUser() {
		this.maxCharacter = 1000;
		this.themes.add(new Gold());
		this.themes.add(new VIP());
	}
}

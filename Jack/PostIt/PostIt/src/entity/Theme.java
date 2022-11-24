package entity;

public abstract class Theme {
	
	protected String background;
	protected String border;
	protected String icon;
	protected String music;
	
	@Override
	public String toString() {
		return "Background is " + this.background + "\nBorder is " + this.border + "\nIcon is " + this.icon + "\nMusic is" + this.music;
	}
}

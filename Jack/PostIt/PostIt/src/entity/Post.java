package entity;

import builder.PostBuilder;

public class Post {
	
	private String title;
	private String content;
	private Theme theme;
	private String picture;
	
	public static PostBuilder builder = new PostBuilder();
	
	public Post(PostBuilder builder) {
		super();
		this.title = builder.getTitle();
		this.content = builder.getContent();
		this.theme = builder.getTheme();
		this.picture = builder.getPicture();
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Theme getTheme() {
		return theme;
	}
	public void setTheme(Theme theme) {
		this.theme = theme;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	
}

package builder;

import entity.Post;
import entity.Theme;

public class PostBuilder {

	private String title;
	private String content;
	private Theme theme;
	private String picture;

	public PostBuilder newInstance() {
		return new PostBuilder();
	}

	public String getTitle() {
		return title;
	}

	public PostBuilder setTitle(String title) {
		this.title = title;
		return this;
	}

	public String getContent() {
		return content;
	}

	public PostBuilder setContent(String content) {
		this.content = content;
		return this;
	}

	public Theme getTheme() {
		return theme;
	}

	public PostBuilder setTheme(Theme theme) {
		this.theme = theme;
		return this;
	}

	public String getPicture() {
		return picture;
	}

	public PostBuilder setPicture(String picture) {
		this.picture = picture;
		return this;
	}

	public Post build() {
		return new Post(this);
	}

}

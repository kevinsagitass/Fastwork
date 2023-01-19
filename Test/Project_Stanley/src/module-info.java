module Project_Stanley {
	requires javafx.controls;
	requires javafx.graphics;
	requires jfxtras.labs;
	
	opens application to javafx.graphics, javafx.fxml;
}

package application;

import java.io.FileInputStream;

import java.io.FileNotFoundException;
import java.util.Optional;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.stage.Stage;
import javafx.stage.Window;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.Spinner;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundPosition;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BackgroundSize;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;


public class Main extends Application implements EventHandler<ActionEvent> {
	BorderPane borderPane, borderpane2;
	FlowPane flowPane;
	Scene scene;

	//menubar
	MenuBar menubar;
	Menu menu1, menu2;
	MenuItem menuItemBuyFood, 
	menuItemManageFood, menuItemTransactionHistory
	,menuItemLogoutItems;
	Image image1;

	//menu buy food
	private static final int HEIGHT = 300;
	private static final int WIDTH = 900;
	HBox hBox;
	jfxtras.labs.scene.control.window.Window window;
	TableView<String> tableView;
	TableColumn<String, String> id, name,
	type;
	TableColumn<String, Integer> price, stock;
	
	//check out
	BorderPane borderPaneBuyFood;
	GridPane gridPaneBuyFood;
	TableView<String> tableViewCheckout;
	TableColumn<String, String> foodID,foodName; 
	TableColumn<String, Integer> foodPrice, foodQuantity, totalPrice;
	Label iDlLabel,nameLabel,typeLabel,priceLabel,stockLabel, quantityLabel;
	Spinner<Integer> qtySpinner;
	Button addTocart, removeFromCart, Checkout;
	Label idgetLabel, namegetLabel, typegetLabel, pricegetLabel, stockgetLabel;
	
	public void initiate() throws FileNotFoundException {
		
		//main menu
		FileInputStream inputstream = new FileInputStream("C:mcd.png"); 
		borderPane = new BorderPane();
		borderpane2 = new BorderPane();
		flowPane = new FlowPane();
		scene = new Scene(borderPane,900,600);

		image1 = new Image(inputstream,
				400,400,false,false);
		menu1 = new Menu("Menu");
		menu2 = new Menu("Account");
		menuItemBuyFood = new MenuItem("Buy Food");
		menuItemManageFood = new MenuItem("Manage Food");
		menuItemTransactionHistory = new MenuItem("Transaction Histroy");
		menuItemLogoutItems = new MenuItem("Logout");
		menubar = new MenuBar(menu1, menu2);

		//menu buy food
		hBox = new HBox();
		borderPaneBuyFood = new BorderPane();
		window = new jfxtras.labs.scene.control.window.Window("Buy Food");
		tableView = new TableView<>();
		id = new TableColumn<>("ID");
		name = new TableColumn<>("Name");
		type = new TableColumn<>("Type");
		price = new TableColumn<>("Price");
		stock = new TableColumn<>("Stock");

		tableView.getColumns().add(id);
		tableView.getColumns().add(name);
		tableView.getColumns().add(type);
		tableView.getColumns().add(price);
		tableView.getColumns().add(stock);

		window.getContentPane().getChildren().add(tableView);
		window.setMinimized(true);
		
		//checkout
		gridPaneBuyFood = new GridPane();
		iDlLabel = new Label("ID");
		nameLabel = new Label("Name");
		typeLabel = new Label("Type");
		priceLabel = new Label("Price");
		stockLabel  = new Label("Stock");
		quantityLabel = new Label("Quantity:");
		

		
		qtySpinner = new Spinner<>(1,100,1,1);
		addTocart = new Button("Add to cart");
		removeFromCart = new Button("Remove from cart");
		Checkout = new Button("Checkout");
		
		tableViewCheckout = new TableView<>();

		foodID = new TableColumn<>("Food ID");
		foodName = new TableColumn<>("Food Name");
		foodPrice = new TableColumn<>("Food Price");
		foodQuantity= new TableColumn<>("Quantity");
		totalPrice = new TableColumn<>("Total Price");
		
		tableViewCheckout.getColumns().add(foodID);
		tableViewCheckout.getColumns().add(foodName);
		tableViewCheckout.getColumns().add(foodPrice);
		tableViewCheckout.getColumns().add(foodQuantity);
		tableViewCheckout.getColumns().add(totalPrice);
	
		
	}

	public void setPos() {
		
		//main menu
		menubar.setPrefWidth(800);
		menubar.setPrefHeight(20);
		menu1.getItems().add(menuItemBuyFood);
		menu1.getItems().add(menuItemManageFood);
		menu1.getItems().add(menuItemTransactionHistory);
		menu2.getItems().add(menuItemLogoutItems);
		borderPane.setTop(menubar);

		borderpane2.setBackground(new Background(new BackgroundImage(image1,
				BackgroundRepeat.NO_REPEAT,
				BackgroundRepeat.NO_REPEAT,
				BackgroundPosition.CENTER, null
				)));
		borderPane.setBackground(new Background(new BackgroundFill(Color.RED, CornerRadii.EMPTY, Insets.EMPTY)));
		borderPane.setCenter(borderpane2);
		
	}
	public void setposBuyFood() {
		// ini seharusnya nanti ngambil data dari tabel di database
		//sementara ku buat jadi label aja
		idgetLabel = new Label("5");
		namegetLabel = new Label("Ice Cream");
		typegetLabel = new Label("Desert");
		pricegetLabel = new Label("7000");
		stockgetLabel = new Label("180");
		
		hBox.getChildren().add(window);
		borderpane2.setTop(hBox);
		borderpane2.setCenter(borderPaneBuyFood);
		
		//menu buy food
		window.setPrefWidth(WIDTH);
		window.setPrefHeight(HEIGHT);

		id.setMinWidth(WIDTH / 5);
		name.setMinWidth(WIDTH / 5);
		type.setMinWidth(WIDTH / 5);
		price.setMinWidth(WIDTH / 5);
		stock.setMinWidth(WIDTH / 5);
		
		
		
		//check out
		 iDlLabel.setFont(new Font("Arial", 15));
		 nameLabel.setFont(new Font("Arial", 15));
		 typeLabel.setFont(new Font("Arial", 15));
		 priceLabel.setFont(new Font("Arial", 15));
		 stockLabel.setFont(new Font("Arial", 15));
		 quantityLabel.setFont(new Font("Arial", 15));
		 
		 idgetLabel.setFont(new Font("Arial", 15));
		 namegetLabel.setFont(new Font("Arial", 15));
		 typegetLabel.setFont(new Font("Arial", 15));
		 pricegetLabel.setFont(new Font("Arial", 15));
		 stockgetLabel.setFont(new Font("Arial", 15));
		 
		foodID.setMinWidth(500 / 5);
		foodName.setMinWidth(500/ 5);
		foodPrice.setMinWidth(500 / 5);
		foodQuantity.setMinWidth(500 / 5);
		totalPrice.setMinWidth(500 / 5);
		

		gridPaneBuyFood.add(iDlLabel, 0, 0);
		gridPaneBuyFood.add(nameLabel, 0, 1);
		gridPaneBuyFood.add(typeLabel, 0, 2);
		gridPaneBuyFood.add(priceLabel, 0, 3);
		gridPaneBuyFood.add(stockLabel, 0, 4);

		gridPaneBuyFood.add(idgetLabel, 1, 0);
		gridPaneBuyFood.add(namegetLabel, 1, 1);
		gridPaneBuyFood.add(typegetLabel,  1, 2);
		gridPaneBuyFood.add(pricegetLabel,  1, 3);
		gridPaneBuyFood.add(stockgetLabel, 1, 4);
		
		gridPaneBuyFood.add(quantityLabel, 2, 0);
		gridPaneBuyFood.add(qtySpinner, 2, 1);
		gridPaneBuyFood.add(addTocart, 2, 2);
		gridPaneBuyFood.add(removeFromCart,  2, 3);
		gridPaneBuyFood.add(Checkout,  2, 4);
		
		gridPaneBuyFood.setHgap(10);
		gridPaneBuyFood.setVgap(15);
		
		gridPaneBuyFood.setMargin(idgetLabel, 
				new Insets(0,180,0,0));
		
		borderPaneBuyFood.setBackground(new Background(new BackgroundFill(Color.rgb(80, 130, 150), CornerRadii.EMPTY, Insets.EMPTY)));
		
		borderPaneBuyFood.setLeft(gridPaneBuyFood);
		borderPaneBuyFood.setRight(tableViewCheckout);
		
		borderPaneBuyFood.setMargin(gridPaneBuyFood, 
				new Insets(30,0,0,10));
		borderPaneBuyFood.setMargin(tableViewCheckout, 
				new Insets(20));
		
		tableViewCheckout.setPrefSize(500, 100);
		qtySpinner.setMaxWidth(100);
		addTocart.setPrefSize(100, 20);
		removeFromCart.setPrefSize(100, 20);
		Checkout.setPrefSize(100, 20);
	}

	public void setEvent() {
		menuItemBuyFood.setOnAction(this);
		menuItemLogoutItems.setOnAction(this);
		menuItemManageFood.setOnAction(this);
		Checkout.setOnAction(this);
	}
	
	public Optional<ButtonType> setAlert(AlertType alertType, String message) {
		Alert alerterror = new Alert(alertType);
		alerterror.setContentText(message);
		alerterror.setHeaderText("Error");
		return alerterror.showAndWait();
	}
	
	@Override
	public void start(Stage primaryStage) {
		try {
			initiate();
			setPos();
			setEvent();
			primaryStage.setResizable(false);
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void handle(ActionEvent event) {
		if(event.getSource() == menuItemBuyFood) {
			setposBuyFood();
		}
		if(event.getSource() == menuItemLogoutItems) {
			//go to login page
		}
		if(event.getSource() == menuItemManageFood) {
			//go to manage food form
		}
		if(event.getSource() == menuItemTransactionHistory) {
			//go to transaction histroy form

		}
		if(event.getSource() == Checkout) {
			if(tableViewCheckout.getSelectionModel().isEmpty()) {
				setAlert(AlertType.ERROR, "Cart is empty");
			}
		}
	}
}

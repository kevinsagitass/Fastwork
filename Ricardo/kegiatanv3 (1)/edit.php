<?php
include_once("config.php");
if(!empty($_POST)) {
	extract($_POST);

	$result = $dbConn->query("UPDATE realisasi SET tahap1 = '$tahap1',
		tahap2='$tahap2',
		tahap3='$tahap3',
		tahap4='$tahap4',
		sisa='$sisa' WHERE id='$id'");

	header("location: fast.php");
}

?>
<table border="1">
	<thead>
		<tr>
			<th>No.</th>
			<th>Nama Kegiatan</th>
			<th>Nama Belanja</th>
			<th>Dana</th>
			<th>Tahap 1</th>
			<th>Tahap 2</th>
			<th>Tahap 3</th>
			<th>Tahap 4</th>
			<th>Sisa dana</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php
			$result = $dbConn->query("SELECT *,r.id as id_realisasi FROM menu_kegiatan m LEFT JOIN realisasi r on r.id_kegiatan=m.id WHERE m.id={$_GET['id']} ORDER BY m.id DESC");
		?>
		<form action="./edit.php" method="POST">

		<?php
		$no=1;
		while($row = $result->fetch(PDO::FETCH_ASSOC)) { 
			if(!isset($row['tahap1'])) {
				$row['tahap1'] = $row['tahap2'] = $row['tahap3'] = $row['tahap4'] = 0;
				$row['sisa'] = $row['total'];
			}

			echo "<tr class='odd'>";
			echo "<td class='dtr-control sorting_1' tabindex='0'>".$no++."</td>";
			echo "<td>"."<b>".$row['spm']."</b>
			<br>- ".$row['menu']."
			<br>- ".$row['jenis_belanja']."
			
			</td>";
			
			echo "<td>" .$row['nama_belanja']. "<input type='hidden' name='id' value='{$row['id']}'/></td>";	
			echo "<td>" .buatRupiah($row['total']). "<input type='hidden' id='total{$row['id']}' value='{$row['total']}'/></td>";
			echo "<td>" ."<input type='text' value='{$row['tahap1']}' id='tahap1{$row['id']}' onKeyUp='hitungSisa({$row['id']})' name='tahap1' size='5'>". "</td>";
			echo "<td>" ."<input type='text' value='{$row['tahap2']}' id='tahap2{$row['id']}' onKeyUp='hitungSisa({$row['id']})' name='tahap2' size='5'>". "</td>";
			echo "<td>" ."<input type='text' value='{$row['tahap3']}' id='tahap3{$row['id']}' onKeyUp='hitungSisa({$row['id']})' name='tahap3' size='5'>". "</td>";
			echo "<td>" ."<input type='text' value='{$row['tahap4']}' id='tahap4{$row['id']}' onKeyUp='hitungSisa({$row['id']})' name='tahap4' size='5'>". "</td>";
			echo "<td>" ."<input type='text' id='sisa{$row['id']}' name='sisa' value='{$row['sisa']}' size='15'>". "</td>";

			
				
				
			
			echo '<td><button type="submit" id="tombolSimpan">tombol simpan</button><span id="tombolAlert" color="red" style="display:none;">Sisa Kurang dari 0</span></td>';
			echo "</tr>";
			
				
		}
		?>
		</form>

 	</tbody>
                 
</table>
<script src="./jquery-3.6.1.min.js"></script>
<script>
	function hitungSisa(id) {
		let total = parseInt($(`#total${id}`).val()),
			tahap1 = parseInt($(`#tahap1${id}`).val())?parseInt($(`#tahap1${id}`).val()):0,
			tahap2 = parseInt($(`#tahap2${id}`).val())?parseInt($(`#tahap2${id}`).val()):0,
			tahap3 = parseInt($(`#tahap3${id}`).val())?parseInt($(`#tahap3${id}`).val()):0,
			tahap4 = parseInt($(`#tahap4${id}`).val())?parseInt($(`#tahap4${id}`).val()):0,
			sisa = total - tahap1 - tahap2 - tahap3 - tahap4;
		if(sisa >= 0) {
			$(`#sisa${id}`).val(sisa)
			$(`#tombolSimpan`).show()
			$(`#tombolAlert`).hide()
		} else {
			$(`#tombolSimpan`).hide()
			$(`#tombolAlert`).show()
		}
	} 

</script>
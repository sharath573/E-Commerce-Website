#!/usr/bin/perl 
#	Sample perl cgi script.  This script prints a list of the 
#	products in the opatija proj4.products table.
#
#	Code by Alan Riggins, Fall 2017
# Access the script with the following URL:
# http://jadran.sdsu.edu/perl/jadrn046/proj4_products.cgi
#
   
use DBI;

print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Products in the jadran Database</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />



</head>
<body><div>
<img src="/~jadrn000/PROJ4_IMAGES/stocking.png" alt="Christmas stocking" id="stocking" />
<img src="/~jadrn000/PROJ4_IMAGES/rudolph.gif" alt="Rudolph" id="rudolph" />
<h1>Bertha's Deluxe Candies</h1>

<table>
END_HTML

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "proj4";
my $username = "jadrn046";
my $password = "plastic";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT sku, title, short_description, long_description, retail FROM products order by category");
$sth->execute();

while(my @row=$sth->fetchrow_array()) {
    print "\t<tr>\n";
    my $pic = "/~jadrn000/PROJ4_IMAGES/".$row[0].".jpg";
    print "\t\t<td><img src=\"$pic\" alt=\"$row[1]\" />";
    print "<b>$row[1]</b><br /></br />";
    print "$row[2]<br /><br />";
    print "$row[3]<br /><br />";
    print "$row[4]</td>\n";
    print "\t</tr>\n";
    }
 

$sth->finish();
$dbh->disconnect();

    	

print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";

//map variable
var map = L.map('my-map').setView([32.764181,-97.124634], 10);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var options = {
    radius: 6,
    opacity: 1,
    fillColor: "#0018a3",
    fillOpacity: 0.9,
    color: '#0018a3',
    weight: 2,
  };

var dallas = $.getJSON("data/dallas3.js");
dallas.then(function(data) {
		var contrabandData = L.geoJson(data, {
			filter: function(feature, layer) {
				return feature.properties.contraband_found == 1;
			}
		});
		var searchData = L.geoJson(data, {
			filter: function(feature, layer) {
				return feature.properties.search_conducted == 1;
			}
		});
		var allData = L.geoJson(data);
    var januaryAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-01");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
						var raceColor = 'black';
						if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
						if (feature.properties.driver_race === 'White') raceColor = 'green';
						if (feature.properties.driver_race === 'Black') raceColor = 'orange';
						var options = {
								radius: 6,
								opacity: 1,
								fillColor: raceColor,
								fillOpacity: 0.9,
								color: raceColor,
								weight: 2,
							};
							return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var februaryAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-02");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var marchAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-03");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var aprilAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-04");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var mayAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-05");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var juneAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-06");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var julyAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-07");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var augustAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-08");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var septemberAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-09");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var octoberAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-10");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var novemberAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-11");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });
		var decemberAll = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-12");
        },
        pointToLayer: function(feature, latlng) {
	  var raceColor = 'black';
	  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
	  if (feature.properties.driver_race === 'White') raceColor = 'green';
	  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
	  var options = {
	      radius: 6,
	      opacity: 1,
	      fillColor: raceColor,
	      fillOpacity: 0.9,
	      color: raceColor,
	      weight: 2,
	    };
	            return L.circleMarker(latlng, options).on('click', function() {
	                this.bindPopup(feature.properties.violation).openPopup();
	            });
	        }
	    });

			var januarySearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-01");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
							var raceColor = 'black';
							if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
							if (feature.properties.driver_race === 'White') raceColor = 'green';
							if (feature.properties.driver_race === 'Black') raceColor = 'orange';
							var options = {
									radius: 6,
									opacity: 1,
									fillColor: raceColor,
									fillOpacity: 0.9,
									color: raceColor,
									weight: 2,
								};
								return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var februarySearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-02");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var marchSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-03");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var aprilSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-04");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var maySearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-05");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var juneSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-06");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var julySearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-07");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var augustSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-08");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var septemberSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-09");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var octoberSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-10");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var novemberSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-11");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });
			var decemberSearch = L.geoJson(search, {
	        filter: function(feature, layer) {
							return feature.properties.stop_date.includes("2015-12");
	        },
	        pointToLayer: function(feature, latlng) {
		  var raceColor = 'black';
		  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
		  if (feature.properties.driver_race === 'White') raceColor = 'green';
		  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
		  var options = {
		      radius: 6,
		      opacity: 1,
		      fillColor: raceColor,
		      fillOpacity: 0.9,
		      color: raceColor,
		      weight: 2,
		    };
		            return L.circleMarker(latlng, options).on('click', function() {
		                this.bindPopup(feature.properties.violation).openPopup();
		            });
		        }
		    });

				var januaryContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-01");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
								var raceColor = 'black';
								if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
								if (feature.properties.driver_race === 'White') raceColor = 'green';
								if (feature.properties.driver_race === 'Black') raceColor = 'orange';
								var options = {
										radius: 6,
										opacity: 1,
										fillColor: raceColor,
										fillOpacity: 0.9,
										color: raceColor,
										weight: 2,
									};
									return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var februaryContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-02");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var marchContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-03");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var aprilContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-04");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var mayContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-05");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var juneContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-06");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var julyContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-07");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var augustContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-08");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var septemberContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-09");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var octoberContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-10");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var novemberContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-11");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
				var decemberContraband = L.geoJson(contraband, {
		        filter: function(feature, layer) {
								return feature.properties.stop_date.includes("2015-12");
		        },
		        pointToLayer: function(feature, latlng) {
			  var raceColor = 'black';
			  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
			  if (feature.properties.driver_race === 'White') raceColor = 'green';
			  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
			  var options = {
			      radius: 6,
			      opacity: 1,
			      fillColor: raceColor,
			      fillOpacity: 0.9,
			      color: raceColor,
			      weight: 2,
			    };
			            return L.circleMarker(latlng, options).on('click', function() {
			                this.bindPopup(feature.properties.violation).openPopup();
			            });
			        }
			    });
    // map.fitBounds(allStops.getBounds(), {
    //     padding: [50, 50]
    // });
		januaryAll.addTo(map);
    februaryAll.addTo(map);
		marchAll.addTo(map);
    aprilAll.addTo(map);
		mayAll.addTo(map);
    juneAll.addTo(map);
		julyAll.addTo(map);
    augustAll.addTo(map);
		septemberAll.addTo(map);
    octoberAll.addTo(map);
		novemberAll.addTo(map);
    decemberAll.addTo(map);
    // The JavaScript below is new
    $("#Jan").click(function() {
				var type = 'All';
				if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
				else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
				var layer = 'january' + type;
				map.eachLayer(function (layer) {
					    map.removeLayer(layer);
					});
				map.addLayer(layer);
    });
		$("#Feb").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'february' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
    });
		$("#Mar").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'march' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
    });
		$("#Apr").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'april' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#May").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'may' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#Jun").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'june' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
    });
		$("#Jul").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'july' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
    });
		$("#Aug").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'august' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
    });
		$("#Sep").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'september' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#Oct").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'october' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#Nov").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'november' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#Dec").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = 'december' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
		$("#Full").click(function() {
			var type = 'All';
			if($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) type = "Contraband";
			else if($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) type = "Search";
			var layer = type + 'Data';
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			map.addLayer(layer);
		});
	});

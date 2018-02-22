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

var dallas = $.getJSON("data/dallas3.geojson");
dallas.then(function(data) {
		var contrabandData = L.geoJson(data, {
			filter: function(feature, layer) {
				return feature.properties.contraband_found.includes("1");
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
		var searchData = L.geoJson(data, {
			filter: function(feature, layer) {
				return feature.properties.search_conducted.includes("1");
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
		var allData = L.geoJson(data, {
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

			var januarySearch = L.geoJson(searchData.data, {
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
			var februarySearch = L.geoJson(searchData.data, {
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
			var marchSearch = L.geoJson(searchData.data, {
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
			var aprilSearch = L.geoJson(searchData.data, {
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
			var maySearch = L.geoJson(searchData.data, {
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
			var juneSearch = L.geoJson(searchData.data, {
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
			var julySearch = L.geoJson(searchData.data, {
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
			var augustSearch = L.geoJson(searchData.data, {
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
			var septemberSearch = L.geoJson(searchData.data, {
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
			var octoberSearch = L.geoJson(searchData.data, {
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
			var novemberSearch = L.geoJson(searchData.data, {
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
			var decemberSearch = L.geoJson(searchData.data, {
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

				var januaryContraband = L.geoJson(contrabandData.data, {
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
				var februaryContraband = L.geoJson(contrabandData.data, {
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
				var marchContraband = L.geoJson(contrabandData.data, {
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
				var aprilContraband = L.geoJson(contrabandData.data, {
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
				var mayContraband = L.geoJson(contrabandData.data, {
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
				var juneContraband = L.geoJson(contrabandData.data, {
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
				var julyContraband = L.geoJson(contrabandData.data, {
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
				var augustContraband = L.geoJson(contrabandData.data, {
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
				var septemberContraband = L.geoJson(contrabandData.data, {
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
				var octoberContraband = L.geoJson(contrabandData.data, {
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
				var novemberContraband = L.geoJson(contrabandData.data, {
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
				var decemberContraband = L.geoJson(contrabandData.data, {
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
				if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
				    var type = "Search"
				} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
				    var type = "Contraband"
				} else {
				    var type = 'All'
				};
				var layer = 'january' + type;
				map.eachLayer(function (layer) {
					    map.removeLayer(layer);
					});
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Feb").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'february' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Mar").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'march' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Apr").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'april' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#May").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'may' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#Jun").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'june' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Jul").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'july' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Aug").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'august' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
    });
		$("#Sep").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'september' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#Oct").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'october' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#Nov").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'november' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#Dec").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'All'
			};
			var layer = 'december' + type;
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
		$("#Full").click(function() {
			if ($('#contrabandYes:checkbox:checked').length < 1 && $('#searchYes:checkbox:checked').length > 0) {
			    var type = "Search"
			} else if ($('#contrabandYes:checkbox:checked').length > 0 && $('#searchYes:checkbox:checked').length < 1) {
			    var type = "Contraband"
			} else {
			    var type = 'all'
			};
			var layer = type + 'Data';
			map.eachLayer(function (layer) {
						map.removeLayer(layer);
				});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
map.addLayer(eval(layer));
		});
	});

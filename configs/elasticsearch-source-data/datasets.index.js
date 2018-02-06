module.exports = {
  "mappings": {
    "dataset": {
      "properties": {
        "skopeid": {
          "type": "keyword"
        },
        "workspace": {
          "type": "keyword"
        },
        "type": {
          "type": "keyword"
        },
        "title": {
          "type": "text"
        },
        "description": {
          "type": "text"
        },
        "investigators": {
          "type": "keyword"
        },
        "revised": { 
          "type": "date"
        },
        "status": {
          "type": "keyword"
        },
        "publisher": {
          "properties": {
            "name": { 
              "type": "text",
              "fields": { 
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "url": {
              "type": "keyword"
            }
          }
        },
        "dataTypes": {
          "type": "keyword"
        },
        "variables": {
          "type": "nested",
          "properties": {
            "name": {
              "type": "text",
              "fields": {
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "url": {
              "type": "keyword"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "region": {
          "properties": {
            "name": {
              "type": "text",
              "fields": {
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "extents": {
              "type": "float"
            },
            "resolution": {
              "type": "keyword"
            },
            "geometry": {
              "type": "geo_shape"
            }
          }
        },
        "timespan": {
          "properties": {
            "name": {
              "type": "text",
              "fields": {
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "resolution": {
              "type": "keyword"
            },
            "period":  {
              "type": "date_range",
              "format": "strict_year||strict_year_month||strict_year_month_day||epoch_millis"
            }
          }
        },
        "information": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "metadata": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "overlayService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "overlays": {
          "type": "nested",
          "properties": {
            "name": { 
              "type": "text",
              "fields": { 
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "description": {
              "type": "text"
            },
            "type": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "min": {
              "type": "float"
            },
            "max": {
              "type": "float"
            },
            "styles": {
              "type": "keyword"
            }
          }
        },
        "downloadService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "access": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "downloads": {
          "type": "nested",
          "properties": {
            "name": { 
              "type": "text",
              "fields": { 
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "size": {
              "type": "long"
            },
            "format": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "analyticService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "analytics": {
          "type": "nested",
          "properties": {
            "name": { 
              "type": "text",
              "fields": { 
                "raw": { "type": "keyword" }
              }
            },
            "url": {
              "type": "keyword"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "modelService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "link": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "model": {
          "properties": {
            "type": {
              "type": "keyword"
            },
            "name": { 
              "type": "text",
              "fields": { 
                "raw": {
                  "type": "keyword"
                }
              }
            },
            "url": {
              "type": "keyword"
            },
            "description": {
              "type": "text"
            }
          }
        }
      }
    }
  }
};

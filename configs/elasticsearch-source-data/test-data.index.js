module.exports = {
  "mappings": {
    "dataset": {
      "properties": {
        "skopeid": {
          "type": "keyword"
        },
        "type": {
          "type": "keyword"
        },
        "title": {
          "type": "text"
        },
        "descriptionMD": {
          "type": "text"
        },
        "investigators": {
          "type": "text"
        },
        "version": {
          "type": "text"
        },
        "revised": { 
          "type": "date",
          "format": "yyyy-MM-dd hh:mm"
        },
        "status": {
          "type": "keyword"
        },
        "publisher": {
          "properties": {
            "name": {
              "type": "text"
            },
            "nickname": {
              "type": "keyword"
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
              "type": "text"
            },
            "keywords": {
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
        "region": {
          "properties": {
            "name": {
              "type": "text"
            },
            "keywords": {
              "type": "keyword"
            },
            "extents": {
              "type": "text"
            },
            "resolution": {
              "type": "text"
            },
            "geometry": {
              "type": "text"
            }
          }
        },
        "timespan": {
          "properties": {
            "name": {
              "type": "text"
            },
            "keywords": {
              "type": "keyword"
            },
            "resolution": {
              "type": "text"
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
            "anchor": {
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
            "anchor": {
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
            "anchor": {
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
              "type": "text"
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
            "capabilities": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "anchor": {
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
              "type": "text"
            },
            "description": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            },
            "type": {
              "type": "keyword"
            }
          }
        },
        "analyticService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "capabilities": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "anchor": {
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
              "type": "text"
            },
            "description": {
              "type": "text"
            },
            "url": {
              "type": "keyword"
            }
          }
        },
        "modelService": {
          "properties": {
            "markdown": {
              "type": "text"
            },
            "capabilities": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "anchor": {
              "type": "text"
            },
            "description": {
              "type": "text"
            }
          }
        },
        "model": {
          "properties": {
            "title": {
              "type": "keyword"
            },
            "nickname": {
              "type": "keyword"
            },
            "version": {
              "type": "keyword"
            },
            "capabilities": {
              "type": "keyword"
            }
          }
        }
      }
    }
  }
};

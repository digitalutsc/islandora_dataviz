<?php

module_load_include('inc', 'islandora', 'includes/solution_packs');

function getDataViz() {
  $obj_pid = isset($_GET['pid']) ? $_GET['pid'] : '';

  if ($obj_pid != null) {
    $connection = islandora_get_tuque_connection();
    $repository = $connection->repository;
    $object = $repository->getObject($obj_pid);
    $content = "test";
  } else {
    $content = "TEI not found";
  }

  drupal_json_output($content);
  drupal_exit();
}


